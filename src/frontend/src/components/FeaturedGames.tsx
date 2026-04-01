import type { RobloxGame } from "../backend.d";
import { useRobloxGames } from "../hooks/useQueries";

const GAME_IMAGES = [
  "/assets/generated/game-soccer.dim_400x300.jpg",
  "/assets/generated/game-racing.dim_400x300.jpg",
  "/assets/generated/game-basketball.dim_400x300.jpg",
  "/assets/generated/game-arena.dim_400x300.jpg",
];

const FALLBACK_GAMES: RobloxGame[] = [
  {
    title: "BloxyBall Soccer",
    description: "Join millions in the ultimate Roblox soccer experience.",
    playersOnline: BigInt(2400000),
    genre: "Sports",
    topScore: BigInt(98542),
  },
  {
    title: "Speed Racer X",
    description: "Drift, boost, and race your way to the championship.",
    playersOnline: BigInt(1200000),
    genre: "Racing",
    topScore: BigInt(54321),
  },
  {
    title: "Hoop Legends",
    description: "NBA-style basketball with Roblox avatars and epic dunks.",
    playersOnline: BigInt(890000),
    genre: "Sports",
    topScore: BigInt(41200),
  },
  {
    title: "Battle Arena Pro",
    description: "PvP combat sports in a massive blocky arena.",
    playersOnline: BigInt(3100000),
    genre: "Battle",
    topScore: BigInt(123456),
  },
];

function formatOnline(n: bigint): string {
  const num = Number(n);
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
  return num.toString();
}

const GENRE_COLORS: Record<string, string> = {
  Sports: "oklch(0.44 0.19 25)",
  Racing: "oklch(0.89 0.18 95)",
  Battle: "oklch(0.57 0.16 245)",
};

export function FeaturedGames() {
  const { data, isLoading } = useRobloxGames();
  const games = data && data.length > 0 ? data : FALLBACK_GAMES;

  return (
    <section
      className="py-10 px-4"
      style={{ background: "oklch(0.92 0 0)" }}
      data-ocid="games.section"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">FEATURED GAMES</h2>
          <span
            className="font-sport font-semibold text-sm uppercase tracking-widest cursor-pointer"
            style={{ color: "oklch(0.44 0.19 25)" }}
          >
            SEE ALL &rarr;
          </span>
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            data-ocid="games.loading_state"
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="game-tile"
                style={{ height: "260px", background: "oklch(0.85 0 0)" }}
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {games.slice(0, 4).map((game, i) => (
              <div
                key={game.title}
                className="game-tile group"
                data-ocid={`games.item.${i + 1}`}
              >
                <div className="relative" style={{ height: "200px" }}>
                  <img
                    src={GAME_IMAGES[i % GAME_IMAGES.length]}
                    alt={game.title}
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: "rgba(0,0,0,0.55)" }}
                  >
                    <button
                      type="button"
                      className="font-pixel text-white px-4 py-2"
                      style={{
                        background: "oklch(0.14 0 0)",
                        border: "3px solid #fff",
                        boxShadow: "3px 3px 0 rgba(0,0,0,0.5)",
                        fontSize: "9px",
                      }}
                      data-ocid={`games.button.${i + 1}`}
                    >
                      PLAY NOW
                    </button>
                  </div>
                </div>
                <div className="p-3" style={{ background: "oklch(0.14 0 0)" }}>
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <h3 className="font-sport font-bold text-white text-sm leading-tight">
                      {game.title}
                    </h3>
                    <span
                      className="font-pixel text-white shrink-0 px-1"
                      style={{
                        fontSize: "6px",
                        background:
                          GENRE_COLORS[game.genre] ?? "oklch(0.44 0.19 25)",
                      }}
                    >
                      {game.genre}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-sport text-xs"
                      style={{ color: "oklch(0.89 0.18 95)" }}
                    >
                      &bull; {formatOnline(game.playersOnline)} online
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
