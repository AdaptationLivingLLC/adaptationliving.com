import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="pt-4 px-6 max-w-7xl mx-auto">
      <ol className="flex items-center gap-2 text-sm font-body">
        <li>
          <Link
            href="/"
            className="text-[#D4AF37] hover:text-[#B8952A] transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-current opacity-40" />
            {item.path && i < items.length - 1 ? (
              <Link
                href={item.path}
                className="opacity-70 hover:text-[#D4AF37] hover:opacity-100 transition-all"
              >
                {item.name}
              </Link>
            ) : (
              <span className="font-semibold">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
