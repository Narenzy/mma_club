export type ContactRequestType = 'contact' | 'trial' | 'membership';

export type ContactPlanId =
  | 'students_half_jear'
  | 'students'
  | 'adults_half_jear'
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
