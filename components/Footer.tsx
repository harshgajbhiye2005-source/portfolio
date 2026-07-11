import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 sm:flex-row sm:justify-between">
        <a href="#top" className="display text-lg">
          {site.name}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </nav>

        <span className="text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </span>
      </div>
    </footer>
  );
}
