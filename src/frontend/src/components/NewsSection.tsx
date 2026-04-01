import type { NewsItem } from "../backend.d";
import { useNewsItems } from "../hooks/useQueries";

const FALLBACK_NEWS: (NewsItem & { image: string })[] = [
  {
    headline: "BlockFC Wins RoboSports Championship in Overtime Shootout",
    summary:
      "Millions watched as BlockFC's legendary striker scored the winning goal in the 94th minute.",
    timestamp: BigInt(Date.now()),
    category: "ROBLOX",
    image: "/assets/generated/hero-main-card.dim_800x500.jpg",
  },
  {
    headline: "LeBron James Drops 38 Points in Playoff Overtime Thriller",
    summary:
      "Lakers edge the Celtics 108-102 in one of the most dramatic games of the season.",
    timestamp: BigInt(Date.now() - 3600000),
    category: "NBA",
    image: "/assets/generated/news-basketball.dim_400x250.jpg",
  },
  {
    headline: "Chiefs Clinch AFC West With Dominant 27-14 Win",
    summary:
      "Mahomes threw four touchdowns as Kansas City locked up the division with three games remaining.",
    timestamp: BigInt(Date.now() - 7200000),
    category: "NFL",
    image: "/assets/generated/news-football.dim_400x250.jpg",
  },
  {
    headline: "Speed Run World Records Shattered in Roblox Obby League",
    summary:
      "Three world records were broken in a single weekend tournament drawing over 500K players.",
    timestamp: BigInt(Date.now() - 14400000),
    category: "ESPORTS",
    image: "/assets/generated/game-arena.dim_400x300.jpg",
  },
];

const NEWS_IMAGES = [
  "/assets/generated/hero-main-card.dim_800x500.jpg",
  "/assets/generated/news-basketball.dim_400x250.jpg",
  "/assets/generated/news-football.dim_400x250.jpg",
  "/assets/generated/game-arena.dim_400x300.jpg",
];

function formatDate(timestamp: bigint): string {
  return new Date(Number(timestamp)).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  NBA: "oklch(0.57 0.16 245)",
  NFL: "oklch(0.44 0.19 25)",
  MLB: "oklch(0.50 0.21 25)",
  ROBLOX: "oklch(0.44 0.19 25)",
  ESPORTS: "oklch(0.74 0.10 205)",
};

export function NewsSection() {
  const { data, isLoading } = useNewsItems();
  const news = data && data.length > 0 ? data : FALLBACK_NEWS;

  return (
    <section className="py-10 px-4 bg-page" data-ocid="news.section">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">TOP NEWS</h2>
          <span
            className="font-sport font-semibold text-sm uppercase tracking-widest cursor-pointer"
            style={{ color: "oklch(0.44 0.19 25)" }}
          >
            VIEW ALL &rarr;
          </span>
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="news.loading_state"
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="roblox-window"
                style={{ height: "320px", background: "oklch(0.92 0 0)" }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {news.slice(0, 4).map((item, i) => (
              <article
                key={item.headline}
                className="roblox-window cursor-pointer hover:translate-y-[-3px] transition-transform"
                data-ocid={`news.item.${i + 1}`}
              >
                {/* Roblox-style title bar */}
                <div className="roblox-titlebar">
                  <span
                    className="roblox-dot"
                    style={{ background: "#ff5f56" }}
                  />
                  <span
                    className="roblox-dot"
                    style={{ background: "#ffbd2e" }}
                  />
                  <span
                    className="roblox-dot"
                    style={{ background: "#27c93f" }}
                  />
                  <span
                    className="font-pixel text-white ml-2"
                    style={{
                      fontSize: "7px",
                      background:
                        CATEGORY_COLORS[item.category] ?? "oklch(0.44 0.19 25)",
                      padding: "2px 6px",
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                {/* Image */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: "140px", borderBottom: "3px solid #000" }}
                >
                  <img
                    src={
                      (item as typeof item & { image?: string }).image ??
                      NEWS_IMAGES[i % NEWS_IMAGES.length]
                    }
                    alt={item.headline}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="p-3">
                  <h3
                    className="font-sport font-bold text-sm leading-tight mb-2"
                    style={{ color: "oklch(0.12 0 0)" }}
                  >
                    {item.headline}
                  </h3>
                  <p
                    className="font-sport text-xs"
                    style={{ color: "oklch(0.50 0 0)" }}
                  >
                    {item.summary}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span
                      className="font-sport text-xs"
                      style={{ color: "oklch(0.60 0 0)" }}
                    >
                      {formatDate(item.timestamp)}
                    </span>
                    <span
                      className="font-sport font-semibold text-xs uppercase"
                      style={{ color: "oklch(0.44 0.19 25)" }}
                    >
                      READ MORE
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
