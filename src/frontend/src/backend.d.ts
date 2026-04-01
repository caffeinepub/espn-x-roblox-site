import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface RobloxGame {
    title: string;
    description: string;
    playersOnline: bigint;
    genre: string;
    topScore: bigint;
}
export type Time = bigint;
export interface ScoreboardEntry {
    participants: string;
    score: string;
    matchName: string;
}
export interface NewsItem {
    headline: string;
    summary: string;
    timestamp: Time;
    category: string;
}
export interface PlayerCard {
    username: string;
    wins: bigint;
    losses: bigint;
    score: bigint;
    avatarColor: string;
}
export interface backendInterface {
    getAllNewsItems(): Promise<Array<NewsItem>>;
    getAllPlayerCards(): Promise<Array<PlayerCard>>;
    getAllRobloxGames(): Promise<Array<RobloxGame>>;
    getAllScoreboardEntries(): Promise<Array<ScoreboardEntry>>;
}
