export type ContactRequestType = 'contact' | 'trial' | 'membership';

export type ContactPlanId =
  | 'kids'
  | 'students'
  | 'adults'
  | 'personal-training'
  | null;

export interface CreateContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  message?: string;
  requestType: ContactRequestType;
  planId: ContactPlanId;
}
