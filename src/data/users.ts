import type { User } from '../types'

/**
 * SAMPLE LOGIN CREDENTIALS
 * ─────────────────────────────────────────────────────────────
 * Role              | Email                        | Password
 * ─────────────────────────────────────────────────────────────
 * Director          | director@mytravelbox.com     | Director@123
 * Branch Manager    | bm@mytravelbox.com           | Manager@123
 * Operations        | ops@mytravelbox.com          | Ops@1234
 * Sales             | sales@mytravelbox.com        | Sales@123
 * Visa Team         | visa@mytravelbox.com         | Visa@1234
 * Accounts          | accounts@mytravelbox.com     | Accounts@1
 * Tour Manager      | tourmanager@mytravelbox.com  | Tour@1234
 * Parent (Arjun)    | parent1@example.com          | Parent@123
 * Parent (Priya)    | parent2@example.com          | Parent@456
 * Parent (Rahul)    | parent3@example.com          | Parent@789
 * ─────────────────────────────────────────────────────────────
 */

export const sampleUsers: User[] = [
  // ── Internal staff ──────────────────────────────────────────
  {
    id: 'u1',
    name: 'Vikram Malhotra',
    email: 'director@mytravelbox.com',
    password: 'Director@123',
    role: 'director',
    avatar: 'VM',
    phone: '+91-98100-00001',
  },
  {
    id: 'u2',
    name: 'Sunita Kapoor',
    email: 'bm@mytravelbox.com',
    password: 'Manager@123',
    role: 'branch_manager',
    avatar: 'SK',
    phone: '+91-98100-00002',
  },
  {
    id: 'u3',
    name: 'Rajesh Kumar',
    email: 'ops@mytravelbox.com',
    password: 'Ops@1234',
    role: 'operations',
    avatar: 'RK',
    phone: '+91-98100-00003',
  },
  {
    id: 'u4',
    name: 'Anita Singh',
    email: 'sales@mytravelbox.com',
    password: 'Sales@123',
    role: 'sales',
    avatar: 'AS',
    phone: '+91-98100-00004',
  },
  {
    id: 'u5',
    name: 'Deepak Verma',
    email: 'visa@mytravelbox.com',
    password: 'Visa@1234',
    role: 'visa_team',
    avatar: 'DV',
    phone: '+91-98100-00005',
  },
  {
    id: 'u6',
    name: 'Meena Joshi',
    email: 'accounts@mytravelbox.com',
    password: 'Accounts@1',
    role: 'accounts',
    avatar: 'MJ',
    phone: '+91-98100-00006',
  },
  {
    id: 'u7',
    name: 'Tanveer Sheikh',
    email: 'tourmanager@mytravelbox.com',
    password: 'Tour@1234',
    role: 'tour_manager',
    avatar: 'TS',
    phone: '+91-98765-43210',
  },

  // ── Parents ─────────────────────────────────────────────────
  {
    id: 'p1',
    name: 'Harish Sharma',
    email: 'parent1@example.com',
    password: 'Parent@123',
    role: 'parent',
    avatar: 'HS',
    tourId: 'MTB-YPS-2025-001',
    school: 'Yadavindra Public School',
    phone: '+91-98200-11001',
  },
  {
    id: 'p2',
    name: 'Geeta Patel',
    email: 'parent2@example.com',
    password: 'Parent@456',
    role: 'parent',
    avatar: 'GP',
    tourId: 'MTB-SJC-2025-002',
    school: "St. Joseph's Convent",
    phone: '+91-98200-11002',
  },
  {
    id: 'p3',
    name: 'Arun Mehta',
    email: 'parent3@example.com',
    password: 'Parent@789',
    role: 'parent',
    avatar: 'AM',
    tourId: 'MTB-DAV-2025-003',
    school: 'DAV Senior Secondary',
    phone: '+91-98200-11003',
  },
]

export function findUser(email: string, password: string): User | null {
  return sampleUsers.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  ) ?? null
}
