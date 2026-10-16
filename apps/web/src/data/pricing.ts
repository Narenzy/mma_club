import type { PricePlan } from "../types/pricingPlans";

export const pricingPlans: PricePlan[] = [
  {
    id: "basic",
    title: "BASIC",
    price: "79 CHF",
    description: "Perfect for beginners",
    features: [
      "2 trainings per week",
      "Access to MMA classes",
      "Access to gym",
    ],
  },
  {
    id: "standart",
    title: "STANDARD",
    price: "119 CHF",
    description: "For regular training",
    features: ["Unlimited training", "MMA, BJJ and Boxing", "Access to gym"],
  },
  {
    id: "premium",
    title: "PREMIUM",
    price: "149 CHF",
    description: "Full access to everything",
    features: [
      "Unlimited training",
      "All disciplines",
      "Open Mat access",
      "Full gym access",
    ],
  },
  {
    id: "ultra-premium",
    title: "ULTRA PREMIUM",
    price: "200 CHF",
    description: "Full access to everything",
    features: [
      "2 trainings per week",
      "Access to MMA classes",
      "Access to gym",
      "Geshenk fur mitgleider",
    ],
  },
];
