export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="py-8 px-4"
      style={{
        background: "oklch(0.14 0 0)",
        borderTop: "4px solid oklch(0.44 0.19 25)",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div
              className="font-pixel text-white mb-3"
              style={{
                fontSize: "14px",
                textShadow: "2px 2px 0 oklch(0.44 0.19 25)",
              }}
            >
              SPORTS BLOCK
            </div>
            <p
              className="font-sport text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Your ultimate sports and gaming destination where ESPN energy
              meets Roblox fun.
            </p>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-sport font-bold uppercase text-white mb-3 tracking-widest text-sm">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Home",
                "News",
                "Gaming",
                "RoboSports",
                "Esports",
                "Community",
              ].map((link) => (
                <a
                  key={link}
                  href="/"
                  className="font-sport text-sm hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          {/* Stats */}
          <div>
            <h4 className="font-sport font-bold uppercase text-white mb-3 tracking-widest text-sm">
              Live Stats
            </h4>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span
                  style={{
                    width: 10,
                    height: 10,
                    background: "#27c93f",
                    display: "inline-block",
                  }}
                />
                <span
                  className="font-sport text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  4.2M Players Online
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  style={{
                    width: 10,
                    height: 10,
                    background: "oklch(0.44 0.19 25)",
                    display: "inline-block",
                  }}
                />
                <span
                  className="font-sport text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  12 Live Games
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  style={{
                    width: 10,
                    height: 10,
                    background: "oklch(0.89 0.18 95)",
                    display: "inline-block",
                  }}
                />
                <span
                  className="font-sport text-sm"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  Sports Scores Live
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4"
          style={{ borderTop: "2px solid rgba(255,255,255,0.1)" }}
        >
          <span
            className="font-sport text-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            SPORTS BLOCK &copy; {year}
          </span>
          <a
            href={caffeineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sport text-sm hover:text-white transition-colors"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Built with &hearts; using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
