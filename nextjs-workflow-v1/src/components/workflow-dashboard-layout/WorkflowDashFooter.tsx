import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function WorkflowDashFooter() {
  return (
    <footer className="border-t border-white/10 p-4">
      <nav className="flex justify-center gap-4 text-sm text-white/70">
        {FOOTER_LINKS.map((link) => (
          <Link 
            key={link.text}
            href={link.href}
            className="hover:text-white"
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </footer>
  );
}