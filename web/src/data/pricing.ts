import type { PricePlan } from '../types/pricingPlans';

export const pricingPlans: PricePlan[] = [
  {
    id: 'students_half_year',
    title: 'STUDIERENDE – 6 MONATE',
    price: '200 CHF',
    description: 'Für Studierende und Personen in Ausbildung',
    features: [
      'MMA-Technik & Grundlagen',
      'Kondition & Beweglichkeit',
      'Regelmässiges Gruppentraining',
      'Ideal für den Einstieg',
    ],
  },
  {
    id: 'students',
    title: 'STUDIERENDE – 12 MONATE',
    price: '400 CHF',
    description: 'Für langfristigen Trainingsfortschritt',
    features: [
      'Kontinuierliches MMA-Training',
      'Technik & Kombinationen vertiefen',
      'Kraft, Ausdauer & Koordination',
      'Langfristige Entwicklung',
    ],
  },
  {
    id: 'adults_half_year',
    title: 'ERWACHSENE – 6 MONATE',
    price: '250 CHF',
    description: 'Für Einsteiger und Fortgeschrittene',
    features: [
      'MMA-Technik für Stand & Boden',
      'Fitness & Kondition verbessern',
      'Praxisorientiertes Training',
      'Professionelle Betreuung',
    ],
  },
  {
    id: 'adults',
    title: 'ERWACHSENE – 12 MONATE',
    price: '450 CHF',
    description: 'Für ambitioniertes MMA-Training',
    features: [
      'Stand-, Clinch- & Bodentechniken',
      'Technik unter Belastung anwenden',
      'Kraft, Ausdauer & Beweglichkeit',
      'Kontinuierlicher Leistungsaufbau',
    ],
  },
];
