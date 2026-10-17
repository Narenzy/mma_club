import type { PricePlan } from "../types/pricingPlans";

export const pricingPlans: PricePlan[] = [
  {
    id: "kids",
    title: "KINDER & JUGENDLICHE",
    price: "120 CHF",
    description: "Für Kinder und Jugendliche bis 16 Jahre",
    features: [
      "2 Trainings pro Woche",
      "Altersgerechtes MMA-Training",
      "Grundlagen in Technik und Koordination",
      "Betreuung durch erfahrene Trainer",
    ],
  },
  {
    id: "students",
    title: "STUDIERENDE",
    price: "350 CHF",
    description: "Für Studierende mit gültigem Studentenausweis",
    features: [
      "Unbegrenztes Training",
      "MMA, BJJ, Boxen und Muay Thai",
      "Zugang zum Fitnessbereich",
      "Open Mat inklusive",
    ],
  },
  {
    id: "adults",
    title: "ERWACHSENE",
    price: "450 CHF",
    description: "Für Erwachsene ab 17 Jahren",
    features: [
      "Unbegrenztes Training",
      "Zugang zu allen Disziplinen",
      "Zugang zum Fitnessbereich",
      "Open Mat inklusive",
    ],
  },
  {
    id: "personal-training",
    title: "PERSONAL TRAINING",
    price: "99 CHF",
    description: "Individuelles Training mit persönlicher Betreuung",
    features: [
      "1:1 Training mit einem Coach",
      "Individueller Trainingsplan",
      "Technik- und Leistungsanalyse",
      "Flexible Terminvereinbarung",
    ],
  },
];
