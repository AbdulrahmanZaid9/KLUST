import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import flag from "@/assets/flag.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/programme-information", label: "Programme Information" },
  { to: "/career-opportunities", label: "Career Opportunities" },
  { to: "/student-experience", label: "Student Experience" },
  { to: "/contact", label: "FAQ / Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center pl-1 sm:pl-2">
          <div className="flex h-9 items-center justify-center overflow-hidden rounded">
            <img src={flag} alt="KLUST" className="h-full w-auto object-contain" />
          </div>
        </Link>

        <nav className="hidden items-center gap-1 pr-4 md:flex sm:pr-6 lg:pr-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:scale-[1.02]"
          >
            Apply Now
          </Link>
        </nav>

        <button
          className="rounded-md p-2 pr-4 text-foreground md:hidden sm:pr-6 lg:pr-8"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "bg-secondary text-foreground" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
