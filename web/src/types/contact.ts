export type ContactRequestType = 'contact' | 'trial' | 'membership';

export type ContactPlanId =
  | 'students_half_year'
  | 'students'
  | 'adults_half_year'
  | 'adults'
  | null;

export interface CreateContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
  requestType: ContactRequestType;
  planId: ContactPlanId;
}
