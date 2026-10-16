import type { Category, ClassItems } from "../types/classes";

export const categories: Category[] = [
  "All",
  "MMA",
  "BJJ",
  "Boxing",
  "Muay Thai",
];

export const classesShedule: ClassItems[] = [
  {
    day: "Monday",
    time: "08:00",
    discipline: "MMA",
  },
  {
    day: "Tuesday",
    time: "19:00",
    discipline: "Boxing",
  },
  {
    day: "Wednesday",
    time: "18:30",
    discipline: "BJJ",
  },
  {
    day: "Thursday",
    time: "19:00",
    discipline: "Muay Thai",
  },
  {
    day: "Friday",
    time: "19:30",
    discipline: "Open Mat",
  },
];
