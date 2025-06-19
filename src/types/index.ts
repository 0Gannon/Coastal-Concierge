export interface Reservation {
  id: string;
  propertyName: string;
  address: string;
  checkInDate: string; // ISO string e.g., "2024-07-20T15:00:00"
  checkOutDate: string; // ISO string e.g., "2024-07-27T10:00:00"
  guestName: string;
  numberOfGuests: number;
}

export interface Instruction {
  title: string;
  content: string; // Can be simple text or markdown
  format: 'text' | 'pdfLink'; // To distinguish between inline text and PDF
  url?: string; // For PDF links
}

export interface Amenity {
  id: string;
  name: string;
  description: string;
  icon?: React.ElementType; // Lucide icon component
  instructions?: Instruction[];
}

export interface PropertyGuide {
  welcomeMessage: string;
  amenities: Amenity[];
  houseRules: string[];
  emergencyContacts: { name: string; phone: string }[];
}

export interface Recommendation {
  id: string;
  type: 'dining' | 'entertainment' | 'activity';
  name: string;
  description: string;
  address?: string;
  imageUrl?: string;
  website?: string;
  savingsInfo?: string; // e.g., "Happy Hour 4-6 PM" or "10% off with code XYZ"
  dataAiHint?: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai' | 'system';
  timestamp: Date;
  requiresEscalation?: boolean;
}
