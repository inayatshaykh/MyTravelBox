import type {
  TourCard,
  Destination,
  ChecklistItem,
  ReadinessScores,
  TimelineEvent,
  PaymentInstallment,
  DeliverableGroup,
  PackingItem,
  LiveUpdate,
  FlightInfo,
  KeyContact,
} from '../types'

export const liveManifest: TourCard[] = [
  { destination: 'Tokyo', school: 'Yadavindra Public School', flag: '🗾', students: 45, daysToGo: 42, readiness: 66 },
  { destination: 'Singapore', school: "St. Joseph's School", flag: '🦁', students: 32, daysToGo: 68, readiness: 38 },
  { destination: 'Switzerland', school: 'DAV Public School', flag: '🏔️', students: 28, daysToGo: 95, readiness: 21 },
  { destination: 'Dubai', school: "Bhavan's School", flag: '🏙️', students: 60, daysToGo: 19, readiness: 88 },
  { destination: 'Vietnam', school: 'Sacred Heart School', flag: '🌿', students: 37, daysToGo: 110, readiness: 12 },
]

export const destinations: Destination[] = [
  { name: 'Japan', emoji: '🗻', region: 'Global', duration: '10 days', bg: '#FBF0E6' },
  { name: 'Singapore', emoji: '🦁', region: 'Global', duration: '7 days', bg: '#E6F0E8' },
  { name: 'Switzerland', emoji: '🏔️', region: 'Global', duration: '12 days', bg: '#E6EEF5' },
  { name: 'Dubai', emoji: '🏙️', region: 'Global', duration: '7 days', bg: '#F5EDE6' },
  { name: 'Rajasthan', emoji: '🏰', region: 'India', duration: '5 days', bg: '#F5E6E6' },
  { name: 'Ladakh', emoji: '🏔', region: 'India', duration: '7 days', bg: '#E6EEF5' },
  { name: 'Andaman', emoji: '🌊', region: 'India', duration: '8 days', bg: '#E6F5F5' },
  { name: 'Northeast', emoji: '🌿', region: 'India', duration: '6 days', bg: '#E6F0E8' },
]

export const checklistItems: ChecklistItem[] = [
  { id: 'registration', title: 'Registration Complete', subtitle: 'Details submitted & confirmed', action: '', done: true },
  { id: 'payment', title: 'Pay Next Installment', subtitle: '₹18,500 due by Dec 15', action: 'Pay Now', done: false },
  { id: 'documents', title: 'Upload Documents', subtitle: '3 of 7 documents uploaded', action: 'Upload', done: false },
  { id: 'briefing', title: 'Pre-Departure Briefing', subtitle: 'Scheduled for Jan 10, 2025', action: 'Confirm', done: false },
]

export const readinessScores: ReadinessScores = {
  overall: 72,
  registration: 100,
  payments: 65,
  visa: 40,
  bookings: 88,
  ops: 70,
}

export const timelineEvents: TimelineEvent[] = [
  { date: 'Oct 15', text: 'Registration Open', done: true },
  { date: 'Nov 28', text: 'Documents Submitted', done: true },
  { date: 'Dec 15', text: '2nd Installment Due', done: false },
  { date: 'Jan 10', text: 'Pre-Departure Briefing', done: false },
]

export const paymentInstallments: PaymentInstallment[] = [
  { label: 'Booking Deposit', amount: '₹15,000', status: 'paid' },
  { label: '2nd Installment', amount: '₹18,500', status: 'due', dueDate: 'Dec 15' },
  { label: 'Final Payment', amount: '₹41,500', status: 'upcoming', dueDate: 'Jan 31' },
]

export const deliverableGroups: DeliverableGroup[] = [
  {
    title: "What We'll Handle",
    note: 'MTB manages',
    items: [
      { label: 'Flights & Airport Transfers', status: '✓' },
      { label: 'Hotels (4-star+)', status: '✓' },
      { label: 'Visa Application Support', status: '✓' },
      { label: 'Tour Manager (on-ground)', status: '✓' },
      { label: 'Travel Insurance', status: '✓' },
      { label: 'Daily Itinerary', status: '✓' },
    ],
  },
  {
    title: 'What You Need to Submit',
    items: [
      { label: 'Passport (Original)', status: 'Pending' },
      { label: 'Visa Photographs', status: 'Pending' },
      { label: 'Parent Consent Form', status: 'Pending' },
      { label: 'Medical Certificate', status: 'Submitted ✓' },
      { label: 'School NOC', status: 'Submitted ✓' },
    ],
  },
  {
    title: 'Itinerary Highlights',
    wide: true,
    items: [
      { label: 'Day 1–2: Tokyo Orientation & Akihabara' },
      { label: 'Day 3: Mt. Fuji & Hakone' },
      { label: 'Day 4–5: Kyoto & Nara' },
      { label: 'Day 6: Osaka Cultural Walk' },
      { label: 'Day 7: Universal Studios Japan' },
      { label: 'Day 8: Departure' },
    ],
  },
  {
    title: 'Important Dates',
    items: [
      { label: 'Visa Submission', status: 'Dec 20' },
      { label: 'Pre-Departure Briefing', status: 'Jan 10' },
      { label: 'Departure Date', status: 'Feb 15' },
      { label: 'Return Date', status: 'Feb 22' },
    ],
  },
]

export const packingList: PackingItem[] = [
  { id: 'passport', label: 'Passport (Original)' },
  { id: 'visa-copy', label: 'Visa Copy (×3)' },
  { id: 'insurance', label: 'Travel Insurance Card' },
  { id: 'currency', label: 'Foreign Currency (¥)' },
  { id: 'powerbank', label: 'Power Bank' },
  { id: 'adapter', label: 'Universal Adapter' },
  { id: 'medicines', label: 'Prescribed Medicines' },
  { id: 'school-id', label: 'School ID Card' },
  { id: 'emergency', label: 'Emergency Contact Sheet' },
  { id: 'mtb-pack', label: 'MTB Info Pack' },
]

export const liveUpdates: LiveUpdate[] = [
  { time: '2 hours ago', text: 'Visa documents have been submitted to the Japanese consulate. Expected processing time: 5–7 business days.' },
  { time: 'Yesterday, 4:30 PM', text: 'Flight AI-306 is confirmed. Check-in opens 24 hours before departure. Terminal T3, IGI Airport.' },
  { time: '3 days ago', text: 'Pre-departure briefing scheduled for January 10, 2025 at 6:00 PM. Location: School Auditorium.' },
]

export const flightInfo: FlightInfo = {
  from: 'DEL',
  fromCity: 'New Delhi',
  to: 'NRT',
  toCity: 'Tokyo',
  departTime: '23:55',
  arriveTime: '09:40+1',
  airline: 'Air India · AI-306',
  terminal: 'T3',
  duration: '8h 45m',
  stops: 'Non-stop',
}

export const keyContacts: KeyContact[] = [
  { role: 'Tour Manager', name: 'Rajesh Kumar', phone: '9876543210' },
  { role: 'Emergency Desk', name: 'MTB Office', phone: '+91-172-1234567' },
  { role: 'Japan Guide', name: 'Tanaka San', phone: '+81-90-1234-5678' },
]
