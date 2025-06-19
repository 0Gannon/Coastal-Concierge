import type { Reservation, PropertyGuide, Recommendation, Amenity } from '@/types';
import { Wifi, Tv, Thermometer, Utensils, Refrigerator, Microwave, Coffee, WashingMachine, ParkingCircle, Info } from 'lucide-react';

export const mockReservation: Reservation = {
  id: 'RES12345',
  propertyName: 'The Salty Seagull',
  address: '123 Ocean Drive, Ocean City, MD 21842',
  checkInDate: '2024-08-15T15:00:00',
  checkOutDate: '2024-08-22T10:00:00',
  guestName: 'John Doe',
  numberOfGuests: 4,
};

export const mockPropertyGuide: PropertyGuide = {
  welcomeMessage: "Welcome to 'The Salty Seagull'! We hope you have a fantastic stay in Ocean City. Please find helpful information about the property below.",
  amenities: [
    {
      id: 'wifi',
      name: 'Wi-Fi Internet',
      description: 'High-speed wireless internet is available throughout the property.',
      icon: Wifi,
      instructions: [
        { title: 'Connection Details', content: "Network Name (SSID): SeagullNet\nPassword: oceanbreeze123", format: 'text' },
      ],
    },
    {
      id: 'tv',
      name: 'Smart TV',
      description: 'Living room Smart TV with streaming apps and cable.',
      icon: Tv,
      instructions: [
        { title: 'Usage', content: "Use the Samsung remote. Press 'Home' for apps. Select HDMI1 for cable TV.", format: 'text' },
        { title: 'Streaming Login', content: "Feel free to log into your own streaming accounts. Please remember to log out before departure.", format: 'text' }
      ],
    },
    {
      id: 'ac',
      name: 'Air Conditioning / Heating',
      description: 'Central AC and heating system.',
      icon: Thermometer,
      instructions: [
        { title: 'Thermostat', content: "The thermostat is located in the hallway. Please set to a reasonable temperature (e.g., 68-75°F or 20-24°C).", format: 'text' },
      ],
    },
    {
      id: 'kitchen',
      name: 'Full Kitchen',
      description: 'Equipped with refrigerator, oven, microwave, dishwasher, coffee maker, and basic cookware/utensils.',
      icon: Utensils,
      instructions: [
        { title: 'Dishwasher', content: "Please use provided dishwasher pods. Scrape food off plates before loading.", format: 'text' },
        { title: 'Coffee Maker', content: "Standard drip coffee maker. Filters and starter coffee provided.", format: 'text' }
      ],
    },
     {
      id: 'refrigerator',
      name: 'Refrigerator',
      description: 'Full-size refrigerator with freezer.',
      icon: Refrigerator,
      instructions: [
        { title: 'Ice Maker', content: "The refrigerator has an automatic ice maker in the freezer compartment.", format: 'text' },
      ],
    },
    {
      id: 'microwave',
      name: 'Microwave',
      description: 'Countertop microwave for quick heating.',
      icon: Microwave,
    },
    {
      id: 'coffee_maker',
      name: 'Coffee Maker',
      description: 'Drip coffee maker. Starter pack of coffee and filters provided.',
      icon: Coffee,
    },
    {
      id: 'laundry',
      name: 'Washer & Dryer',
      description: 'In-unit laundry facilities.',
      icon: WashingMachine,
      instructions: [
        { title: 'Usage', content: "Located in the utility closet. Please use HE detergent. Clean lint trap after each dryer cycle.", format: 'text' },
      ],
    },
    {
      id: 'parking',
      name: 'Parking',
      description: 'Two dedicated parking spots available.',
      icon: ParkingCircle,
      instructions: [
        { title: 'Location', content: "Parking spots are labeled 'Unit 123' in the main parking lot.", format: 'text' },
      ],
    },
    {
      id: 'trash',
      name: 'Trash & Recycling',
      description: 'Instructions for trash and recycling disposal.',
      icon: Info,
      instructions: [
        { title: 'Trash', content: "Trash bins are located at the side of the building. Collection is on Tuesdays and Fridays.", format: 'text' },
        { title: 'Recycling', content: "Recycling bins are next to the trash bins. Please sort recyclables according to local guidelines (paper, plastic, glass).", format: 'text' }
      ]
    }
  ],
  houseRules: [
    'No smoking indoors.',
    'No pets allowed.',
    'Quiet hours from 10 PM to 8 AM.',
    'Please respect the property and neighbors.',
    'Ensure all doors and windows are locked when leaving the property.',
  ],
  emergencyContacts: [
    { name: 'Property Manager (Emergency Only)', phone: '555-123-4567' },
    { name: 'Local Police/Fire/Ambulance', phone: '911' },
  ],
};

export const mockRecommendations: Recommendation[] = [
  {
    id: 'rec1',
    type: 'dining',
    name: "Seacrets Jamaica USA",
    description: "Famous bar, restaurant, and nightclub with a Caribbean theme. Live music and multiple dance floors.",
    address: "117 49th St, Ocean City, MD 21842",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "beach bar",
    website: "https://seacrets.com/",
    savingsInfo: "Happy Hour Mon-Fri 4-7 PM on select drinks and appetizers.",
  },
  {
    id: 'rec2',
    type: 'dining',
    name: "Fish Tales",
    description: "Family-friendly seafood restaurant with a pirate ship playground.",
    address: "2207 Herring Way, Ocean City, MD 21842",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "seafood restaurant",
    website: "https://ocfishtales.com/",
  },
  {
    id: 'rec3',
    type: 'entertainment',
    name: "Ocean City Boardwalk",
    description: "Classic boardwalk experience with shops, arcades, rides, and food.",
    address: "Ocean City Boardwalk, Ocean City, MD",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "boardwalk amusement",
    savingsInfo: "Many shops offer coupons in local visitor guides.",
  },
  {
    id: 'rec4',
    type: 'activity',
    name: "Assateague Island National Seashore",
    description: "See the famous wild horses and enjoy pristine beaches. Great for birdwatching and kayaking.",
    address: "7206 National Seashore Ln, Berlin, MD 21811 (approx. 20 min drive)",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "wild horses",
    website: "https://www.nps.gov/asis/index.htm",
    savingsInfo: "National Park Pass accepted for entry, or daily vehicle fee.",
  },
  {
    id: 'rec5',
    type: 'dining',
    name: "Fractured Prune Doughnuts",
    description: "Famous for hot, made-to-order doughnuts with various glazes and toppings.",
    address: "Multiple locations in Ocean City",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "donuts sweets",
  },
  {
    id: 'rec6',
    type: 'entertainment',
    name: "Jolly Roger Amusement Park",
    description: "Large amusement park with rides, water park (Splash Mountain), mini-golf, and go-karts.",
    address: "2901 Coastal Hwy, Ocean City, MD 21842",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "amusement park",
    website: "https://jollyrogerpark.com/",
    savingsInfo: "Check website for combo passes and evening discounts.",
  },
];

export const propertyInformationForAI = `
Property Name: The Salty Seagull
Address: 123 Ocean Drive, Ocean City, MD 21842

Amenities and Instructions:
- Wi-Fi: Network Name (SSID) is 'SeagullNet', Password is 'oceanbreeze123'.
- Smart TV: Located in the living room. Use the Samsung remote. Press 'Home' for apps like Netflix, Hulu. Select HDMI1 for cable TV. Guests can log into their own streaming accounts but should log out before departure.
- Air Conditioning / Heating: Central system. Thermostat is in the hallway. Suggested temperature range is 68-75°F (20-24°C).
- Kitchen: Fully equipped with refrigerator (with icemaker), oven, microwave, dishwasher. Dishwasher pods are provided; please scrape plates before loading. Standard drip coffee maker with filters and starter coffee.
- Laundry: In-unit washer and dryer in the utility closet. Use HE detergent. Clean lint trap in dryer after each use.
- Parking: Two dedicated parking spots labeled 'Unit 123' in the main parking lot.
- Trash & Recycling: Bins are at the side of the building. Trash collection: Tuesdays and Fridays. Recycling: Please sort paper, plastic, glass.
- Check-in: After 3:00 PM on arrival date.
- Check-out: Before 10:00 AM on departure date.
- Access: Keyless entry. Code will be provided prior to check-in.

House Rules:
- No smoking indoors.
- No pets allowed.
- Quiet hours: 10 PM to 8 AM.
- Lock all doors and windows when leaving.

Emergency Contacts:
- Property Manager (Emergency Only): 555-123-4567
- Local Police/Fire/Ambulance: 911

Local Area:
- The property is close to the beach and many local attractions.
- For recommendations on dining or activities, please ask or check the 'Recommendations' section of this app.
`;
