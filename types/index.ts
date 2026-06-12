export type UserRole =
  | "HOST"
  | "FAMILY_MEMBER"
  | "PHOTOGRAPHER"
  | "GUEST";

export type RSVPStatus =
  | "PENDING"
  | "CONFIRMED"
  | "DECLINED";

export type DietaryPreference =
  | "VEG"
  | "NON_VEG";

export type VendorStatus =
  | "PAID"
  | "PENDING";

export interface User {
  id: string;
  email: string;
  password: string;
  role: UserRole;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  venue: string;
  budgetLimit: number;
  currentExpenses: number;
}

export interface GuestGroup {
  id: string;
  groupName: string;
  eventId: string;
  totalAllocatedPlates: number;
}

export interface Guest {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  groupId: string;
  rsvpStatus: RSVPStatus;
  checkedIn: boolean;
  qrCodeHash: string;
  dietaryPreference: DietaryPreference;
}

export interface Vendor {
  id: string;
  name: string;
  serviceType: string;
  cost: number;
  status: VendorStatus;
  eventId: string;
}

export interface MediaAsset {
  id: string;
  url: string;
  uploadedByRole: UserRole;
  eventId: string;
}
