import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import type { PlayerCard } from "../backend.d";
import { usePlayerCards } from "../hooks/useQueries";

const FALLBACK_PLAYERS: PlayerCard[] = [
  {
    username: "BlockMaster99",
    wins: BigInt(342),
    losses: BigInt(45),
    score: BigInt(98542),
    avatarColor: "#E53935",
  },
  {
    username: "PixelKing",
    wins: BigInt(278),
    losses: BigInt(62),
    score: BigInt(74210),
    avatarColor: "#1E88E5",
  },
  {
    username: "RoboChamp",
    wins: BigInt(415),
    losses: BigInt(30),
    score: BigInt(112340),
    avatarColor: "#FDD835",
  },
  {
    username: "GlitchZero",
    wins: BigInt(190),
    losses: BigInt(88),
    score: BigInt(51000),
    avatarColor: "#26C6DA",
  },
  {
    username: "NeonSlayer",
    wins: BigInt(503),
    losses: BigInt(15),
    score: BigInt(145800),
    avatarColor: "#E53935",
  },
  {
    username: "BloxyPro",
    wins: BigInt(230),
    losses: BigInt(71),
    score: BigInt(62400),
    avatarColor: "#1E88E5",
  },
];

const CARD_BORDER_COLORS = [
  "#E53935",
  "#1E88E5",
  "#FDD835",
  "#26C6DA",
  "#E53935",
  "#1E88E5",
];

function AvatarArt({ color }: { color: string }) {
  return (
    <div
      className="relative mx-auto"
      style={{ width: "80px", height: "100px" }}
    >
      {/* Head */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 40,
          height: 40,
          background: color,
          border: "3px solid #000",
        }}
      />
      {/* Eyes */}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
        }}
      >
        <div style={{ width: 8, height: 8, background: "#000" }} />
        <div style={{ width: 8, height: 8, background: "#000" }} />
      </div>
      {/* Smile */}
      <div
        style={{
          position: "absolute",
          top: 25,
          left: "50%",
          transform: "translateX(-50%)",
          width: 20,
          height: 4,
          background: "#000",
        }}
      />
      {/* Body */}
      <div
        style={{
          position: "absolute",
          top: 46,
          left: "50%",
          transform: "translateX(-50%)",
          width: 50,
          height: 36,
          background: color,
          border: "3px solid #000",
          opacity: 0.85,
        }}
      />
      {/* Left arm */}
      <div
        style={{
          position: "absolute",
          top: 46,
          left: 4,
          width: 14,
          height: 28,
          background: color,
          border: "3px solid #000",
          opacity: 0.85,
        }}
      />
      {/* Right arm */}
      <div
        style={{
          position: "absolute",
          top: 46,
          right: 4,
          width: 14,
          height: 28,
          background: color,
          border: "3px solid #000",
          opacity: 0.85,
        }}
      />
    </div>
  );
}

export function PlayerCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = usePlayerCards();
  const players = data && data.length > 0 ? data : FALLBACK_PLAYERS;

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 260 : -260,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 px-4 bg-page" data-ocid="players.section">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">TOP PLAYERS</h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              data-ocid="players.pagination_prev"
              className="w-10 h-10 flex items-center justify-center text-white"
              style={{
                background: "oklch(0.44 0.19 25)",
                border: "3px solid #000",
                boxShadow: "3px 3px 0 rgba(0,0,0,0.5)",
              }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              data-ocid="players.pagination_next"
              className="w-10 h-10 flex items-center justify-center text-white"
              style={{
                background: "oklch(0.44 0.19 25)",
                border: "3px solid #000",
                boxShadow: "3px 3px 0 rgba(0,0,0,0.5)",
              }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {isLoading ? (
          <div
            className="flex gap-4 overflow-x-auto pb-2"
            data-ocid="players.loading_state"
          >
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                style={{
                  minWidth: "200px",
                  height: "300px",
                  background: "oklch(0.92 0 0)",
                  border: "4px solid #000",
                }}
              />
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {players.map((player, i) => {
              const borderColor =
                CARD_BORDER_COLORS[i % CARD_BORDER_COLORS.length];
              const winRate =
                (Number(player.wins) /
                  (Number(player.wins) + Number(player.losses))) *
                100;
              return (
                <div
                  key={player.username}
                  className="player-card shrink-0"
                  data-ocid={`players.item.${i + 1}`}
                  style={{
                    minWidth: "200px",
                    borderColor: borderColor,
                    background: "#fff",
                  }}
                >
                  {/* Card header */}
                  <div
                    className="p-3 text-center"
                    style={{
                      background: borderColor,
                      borderBottom: "3px solid #000",
                    }}
                  >
                    <span
                      className="font-pixel text-white"
                      style={{ fontSize: "7px", textShadow: "1px 1px 0 #000" }}
                    >
                      #{i + 1} PLAYER
                    </span>
                  </div>

                  {/* Avatar */}
                  <div
                    className="py-5 flex items-center justify-center"
                    style={{ background: "oklch(0.96 0 0)" }}
                  >
                    <AvatarArt color={player.avatarColor ?? borderColor} />
                  </div>

                  {/* Stats */}
                  <div className="p-3" style={{ borderTop: "3px solid #000" }}>
                    <div
                      className="font-pixel text-center mb-3"
                      style={{ fontSize: "8px", color: "oklch(0.12 0 0)" }}
                    >
                      {player.username}
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-center">
                      <div>
                        <div
                          className="font-pixel"
                          style={{ fontSize: "8px", color: borderColor }}
                        >
                          {Number(player.wins)}
                        </div>
                        <div
                          className="font-sport text-xs"
                          style={{ color: "oklch(0.50 0 0)" }}
                        >
                          WINS
                        </div>
                      </div>
                      <div>
                        <div
                          className="font-pixel"
                          style={{
                            fontSize: "8px",
                            color: "oklch(0.44 0.19 25)",
                          }}
                        >
                          {Number(player.losses)}
                        </div>
                        <div
                          className="font-sport text-xs"
                          style={{ color: "oklch(0.50 0 0)" }}
                        >
                          LOSS
                        </div>
                      </div>
                      <div>
                        <div
                          className="font-pixel"
                          style={{
                            fontSize: "7px",
                            color: "oklch(0.44 0.19 25)",
                          }}
                        >
                          {winRate.toFixed(0)}%
                        </div>
                        <div
                          className="font-sport text-xs"
                          style={{ color: "oklch(0.50 0 0)" }}
                        >
                          WIN%
                        </div>
                      </div>
                    </div>
                    <div
                      className="mt-2 pt-2"
                      style={{ borderTop: "2px solid #000" }}
                    >
                      <div
                        className="font-sport text-xs text-center"
                        style={{ color: "oklch(0.50 0 0)" }}
                      >
                        TOP SCORE
                      </div>
                      <div
                        className="font-pixel text-center"
                        style={{ fontSize: "8px", color: borderColor }}
                      >
                        {Number(player.score).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
