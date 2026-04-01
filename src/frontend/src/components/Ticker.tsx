import type { ScoreboardEntry } from "../backend.d";
import { useScoreboardEntries } from "../hooks/useQueries";

const FALLBACK_ENTRIES: ScoreboardEntry[] = [
  { matchName: "NBA", participants: "Lakers vs Celtics", score: "108-102" },
  { matchName: "NFL", participants: "Chiefs vs Eagles", score: "27-14" },
  { matchName: "MLB", participants: "Yankees vs Red Sox", score: "5-3" },
  {
    matchName: "ROBLOX",
    participants: "BloxyBall League",
    score: "2.4M Online",
  },
  { matchName: "NBA", participants: "Warriors vs Bucks", score: "115-98" },
  { matchName: "ESPORTS", participants: "Team Alpha vs Beta", score: "3-1" },
  { matchName: "NFL", participants: "Cowboys vs Giants", score: "21-17" },
  {
    matchName: "ROBLOX",
    participants: "Speed Run World",
    score: "Top: 00:04.2",
  },
];

export function Ticker() {
  const { data } = useScoreboardEntries();
  const entries = data && data.length > 0 ? data : FALLBACK_ENTRIES;
  // Duplicate for infinite scroll
  const doubled = [...entries, ...entries];

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
      style={{ background: "oklch(0.14 0 0)", height: "36px" }}
      data-ocid="ticker.panel"
    >
      <div className="ticker-track h-full flex items-center">
        {doubled.map((entry, i) => (
          <div
            key={`${entry.matchName}-${entry.participants}-${i}`}
            className="flex items-center shrink-0 px-3"
          >
            <span
              className="text-white font-pixel text-xs mr-2 px-2 py-0.5"
              style={{ background: "oklch(0.44 0.19 25)", fontSize: "8px" }}
            >
              {entry.matchName}
            </span>
            <span className="text-white font-sport font-semibold text-sm mr-2 whitespace-nowrap">
              {entry.participants}
            </span>
            <span
              className="font-sport font-bold text-sm whitespace-nowrap"
              style={{ color: "oklch(0.89 0.18 95)" }}
            >
              {entry.score}
            </span>
            <span className="mx-4" style={{ color: "oklch(0.44 0.19 25)" }}>
              &diams;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
