export type Category = 'Alle' | 'MMA';

export type Discipline = 'MMA';

export interface ClassItems {
  day: string;
  time: string;
  discipline: Discipline;
}
