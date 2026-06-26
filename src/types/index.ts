export interface TourCard {
  destination: string;
  school: string;
  flag: string;
  students: number;
  daysToGo: number;
  readiness: number;
}

export interface Destination {
  name: string;
  emoji: string;
  region: string;
  duration: string;
  bg: string;
}

export interface ChecklistItem {
  id: string;
  title: string;
  subtitle: string;
  action: string;
  done: boolean;
}

export interface ReadinessScores {
  overall: number;
  registration: number;
  payments: number;
  visa: number;
  bookings: number;
  ops: number;
}

export interface TimelineEvent {
  date: string;
  text: string;
  done: boolean;
}

export interface PaymentInstallment {
  label: string;
  amount: string;
  status: 'paid' | 'due' | 'upcoming';
  dueDate?: string;
}

export interface DeliverableItem {
  label: string;
  status?: string;
}

export interface DeliverableGroup {
  title: string;
  note?: string;
  wide?: boolean;
  items: DeliverableItem[];
}

export interface PackingItem {
  id: string;
  label: string;
}

export interface LiveUpdate {
  time: string;
  text: string;
}

export interface FlightInfo {
  from: string;
  fromCity: string;
  to: string;
  toCity: string;
  departTime: string;
  arriveTime: string;
  airline: string;
  terminal: string;
  duration: string;
  stops: string;
}

export interface KeyContact {
  role: string;
  name: string;
  phone: string;
}

// ── Auth ──────────────────────────────────────────────
export type UserRole =
  | 'director'
  | 'branch_manager'
  | 'operations'
  | 'sales'
  | 'visa_team'
  | 'accounts'
  | 'tour_manager'
  | 'parent';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;       // plain text for demo only
  role: UserRole;
  avatar: string;         // initials
  tourId?: string;        // for parents
  school?: string;
  phone?: string;
}
