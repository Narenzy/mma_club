export type Category = "Alle" | "MMA";

export type Discipline = "MMA" | "Open Mat";

export interface ClassItems {
  day: string;
  time: string;
  discipline: Discipline;
}
