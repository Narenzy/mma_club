import type { ContactPlanId } from './contact';

export interface PricePlan {
  id: Exclude<ContactPlanId, null>;
  title: string;
  price: string;
  description: string;
  features: string[];
}
