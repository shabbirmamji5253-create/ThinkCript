import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { site } from "../config/content";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-black/35 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl border border-electric/50 bg-electric/10 shadow-glow">
            <span className="h-3 w-3 rounded-full bg-electric shadow-glow" />
          </span>
          <span className="font-display text-lg font-black uppercase tracking-wide text-white">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) =>
            item.href.startsWith("/#") ? (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-white/65 transition hover:text-electric"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-semibold text-white/65 transition hover:text-electric"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>

        <div className="hidden lg:block">
          <Button href="/#contact" icon={false}>
            Start Project
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black/90 px-4 py-5 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {site.nav.map((item) =>
              item.href.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-white/75 hover:bg-white/5 hover:text-electric"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="rounded-xl px-3 py-3 text-base font-semibold text-white/75 hover:bg-white/5 hover:text-electric"
                >
                  {item.label}
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </header>
  );
}
