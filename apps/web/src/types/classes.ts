export type Category = "All" | "MMA" | "BJJ" | "Boxing" | "Muay Thai";

export type Discipline = "MMA" | "BJJ" | "Boxing" | "Muay Thai" | "Open Mat";

export interface ClassItems {
  day: string;
  time: string;
  discipline: Discipline;
}
