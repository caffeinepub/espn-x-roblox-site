import { useQuery } from "@tanstack/react-query";
import type {
  NewsItem,
  PlayerCard,
  RobloxGame,
  ScoreboardEntry,
} from "../backend.d";
import { useActor } from "./useActor";

export function useNewsItems() {
  const { actor, isFetching } = useActor();
  return useQuery<NewsItem[]>({
    queryKey: ["newsItems"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllNewsItems();
    },
    enabled: !!actor && !isFetching,
  });
}

export function usePlayerCards() {
  const { actor, isFetching } = useActor();
  return useQuery<PlayerCard[]>({
    queryKey: ["playerCards"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllPlayerCards();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRobloxGames() {
  const { actor, isFetching } = useActor();
  return useQuery<RobloxGame[]>({
    queryKey: ["robloxGames"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllRobloxGames();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useScoreboardEntries() {
  const { actor, isFetching } = useActor();
  return useQuery<ScoreboardEntry[]>({
    queryKey: ["scoreboardEntries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllScoreboardEntries();
    },
    enabled: !!actor && !isFetching,
  });
}
