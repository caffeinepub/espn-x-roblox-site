import { Menu, Search, User, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  "HOME",
  "NEWS",
  "GAMING",
  "ROBOSPORTS",
  "ESPORTS",
  "COMMUNITY",
  "WATCH",
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header
      className="sticky z-40 w-full"
      style={{ top: "36px", background: "oklch(0.44 0.19 25)" }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-2 shrink-0"
          data-ocid="nav.link"
        >
          <div
            className="w-10 h-10 flex items-center justify-center font-pixel text-white"
            style={{
              background: "oklch(0.14 0 0)",
              border: "3px solid #fff",
              boxShadow: "3px 3px 0 rgba(0,0,0,0.5)",
              fontSize: "10px",
            }}
          >
            SB
          </div>
          <span
            className="font-pixel text-white hidden sm:block"
            style={{
              fontSize: "11px",
              textShadow: "2px 2px 0 rgba(0,0,0,0.6)",
            }}
          >
            SPORTS
            <br />
            BLOCK
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="/"
              data-ocid={`nav.link.${i + 1}`}
              className="font-sport font-semibold text-sm px-3 py-1 text-white uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
              style={{ letterSpacing: "0.08em" }}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: search + profile */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              data-ocid="nav.search_input"
              className="font-sport text-sm px-3 py-1.5 text-black bg-white outline-none"
              style={{
                border: "3px solid #000",
                boxShadow: "2px 2px 0 rgba(0,0,0,0.4)",
                width: "160px",
              }}
            />
            <button
              type="button"
              className="bg-black text-white px-3 py-1.5"
              style={{ border: "3px solid #000", borderLeft: "none" }}
              data-ocid="nav.button"
            >
              <Search size={16} />
            </button>
          </div>
          <button
            type="button"
            className="w-9 h-9 flex items-center justify-center text-white"
            style={{
              background: "oklch(0.14 0 0)",
              border: "3px solid #fff",
              boxShadow: "2px 2px 0 rgba(0,0,0,0.5)",
            }}
            data-ocid="nav.button"
          >
            <User size={16} />
          </button>
          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden w-9 h-9 flex items-center justify-center text-white"
            style={{
              background: "oklch(0.14 0 0)",
              border: "3px solid #fff",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            data-ocid="nav.toggle"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden"
          style={{ background: "oklch(0.14 0 0)", borderTop: "3px solid #fff" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="/"
              className="block font-sport font-semibold text-white uppercase tracking-wider px-6 py-3 border-b"
              style={{
                borderColor: "rgba(255,255,255,0.1)",
                letterSpacing: "0.1em",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
