import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  path?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="navbar-offset pt-4 px-6 max-w-7xl mx-auto">
      <ol className="flex items-center gap-2 text-sm font-body">
        <li>
          <Link href="/" className="text-gold hover:text-gold/80 transition-colors" aria-label="Home">
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.name} className="flex items-center gap-2">
            <ChevronRight className="w-3 h-3 text-text-dim" />
            {item.path && i < items.length - 1 ? (
              <Link href={item.path} className="text-text-muted hover:text-gold transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className="text-text-main">{item.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
