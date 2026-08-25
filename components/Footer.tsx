import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <a href="#top" className="display-sm text-base">
          {site.name}
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </nav>

        <span className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </span>
      </div>
    </footer>
  );
}
