/**
 * Static demo content for the TerraMove marketing site (UI-only).
 * Imagery uses Unsplash source URLs so the build has no local binary assets.
 */

const img = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export interface Experience {
  id: string;
  title: string;
  location: string;
  province: string;
  price: number;
  duration: string;
  category: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  status?: string;
  image: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: "gorilla-trek",
    title: "Mountain Gorilla Trekking",
    location: "Volcanoes National Park",
    province: "Northern Province",
    price: 1500,
    duration: "Full Day · 8h",
    category: "Wildlife",
    difficulty: "Moderate",
    status: "Most Booked",
    image: img("photo-1547970810-dc1eac37d174"),
  },
  {
    id: "lake-kivu-kayak",
    title: "Lake Kivu Kayaking & Sunset",
    location: "Volcanic Crater Lake",
    province: "Rubavu, Western Province",
    price: 89,
    duration: "Half Day · 4h",
    category: "Water",
    difficulty: "Easy",
    status: "Best Seller",
    image: img("photo-1502680390469-be75c86b636f"),
  },
  {
    id: "nyungwe-canopy",
    title: "Nyungwe Forest Canopy Walk",
    location: "Africa's Oldest Rainforest",
    province: "Nyungwe Forest Reserve",
    price: 180,
    duration: "Full Day · 7h",
    category: "Nature",
    difficulty: "Easy",
    image: img("photo-1441974231531-c6227db76b6e"),
  },
  {
    id: "kigali-culture",
    title: "Kigali Cultural Immersion",
    location: "Heart of the Capital",
    province: "Kigali City",
    price: 65,
    duration: "Half Day · 5h",
    category: "Culture",
    difficulty: "Easy",
    image: img("photo-1523805009345-7448845a9e53"),
  },
  {
    id: "golden-monkey",
    title: "Golden Monkey Tracking",
    location: "Volcanoes National Park",
    province: "Northern Province",
    price: 100,
    duration: "Half Day · 4h",
    category: "Wildlife",
    difficulty: "Moderate",
    image: img("photo-1534567110243-8875d64ca8ff"),
  },
];

export interface Stay {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  superhost?: boolean;
  image: string;
}

export const STAYS: Stay[] = [
  {
    id: "kigali-penthouse",
    title: "Kigali Heights Penthouse",
    location: "Kiyovu, Kigali",
    price: 280,
    type: "Penthouse",
    superhost: true,
    image: img("photo-1502672260266-1c1ef2d93688"),
  },
  {
    id: "lakeside-villa",
    title: "Lakeside Villa, Lake Kivu",
    location: "Rubavu, Western Province",
    price: 195,
    type: "Villa",
    image: img("photo-1613490493576-7fde63acd811"),
  },
  {
    id: "musanze-retreat",
    title: "Musanze Garden Retreat",
    location: "Musanze, Northern Province",
    price: 145,
    type: "Cottage",
    superhost: true,
    image: img("photo-1449158743715-0a90ebb6d2d8"),
  },
  {
    id: "nyungwe-lodge",
    title: "Nyungwe Canopy Lodge",
    location: "Nyungwe, Southern Province",
    price: 320,
    type: "Lodge",
    image: img("photo-1470770841072-f978cf4d019e"),
  },
];

export interface Tour {
  id: string;
  title: string;
  category: string;
  duration: string;
  maxGuests: number;
  price: number;
  rating: number;
  languages: string[];
  status?: string;
  image: string;
  description: string;
}

export const TOURS: Tour[] = [
  {
    id: "heritage-walk",
    title: "Kigali Heritage Walk",
    category: "History & Culture",
    duration: "3 hours",
    maxGuests: 12,
    price: 45,
    rating: 4.9,
    languages: ["English", "French"],
    image: img("photo-1517248135467-4c7edcad34c4"),
    description:
      "Walk through Kigali's history — from tragedy to remarkable renewal — with a guide who lived it.",
  },
  {
    id: "street-food",
    title: "Street Food & Night Market",
    category: "Food & Nightlife",
    duration: "4 hours",
    maxGuests: 8,
    price: 55,
    rating: 4.8,
    languages: ["English", "Kinyarwanda"],
    status: "Tonight!",
    image: img("photo-1414235077428-338989a2e8c0"),
    description:
      "Dive into Kigali's vibrant after-dark scene — street eats, live music, and hidden local haunts.",
  },
  {
    id: "tech-tour",
    title: "Art, Innovation & Tech Tour",
    category: "Innovation & Art",
    duration: "5 hours",
    maxGuests: 10,
    price: 75,
    rating: 4.7,
    languages: ["English", "French"],
    image: img("photo-1497366216548-37526070297c"),
    description:
      "Explore Kigali as Africa's emerging tech capital — studios, galleries and startup hubs.",
  },
];

export interface Vehicle {
  id: string;
  name: string;
  model: string;
  capacity: string;
  price: number;
  features: string[];
}

export const VEHICLES: Vehicle[] = [
  {
    id: "sedan",
    name: "Economy Sedan",
    model: "Toyota Corolla · 1–3 passengers",
    capacity: "1–3",
    price: 25,
    features: ["A/C", "Charger", "Water"],
  },
  {
    id: "suv",
    name: "Business SUV",
    model: "Toyota Land Cruiser · 1–5 passengers",
    capacity: "1–5",
    price: 45,
    features: ["Premium A/C", "WiFi", "Charger", "Snacks"],
  },
  {
    id: "minivan",
    name: "Luxury Minivan",
    model: "Toyota HiAce Commuter · 1–8 passengers",
    capacity: "1–8",
    price: 80,
    features: ["Premium A/C", "WiFi", "Meet & Greet", "Child seat", "Luggage assist"],
  },
];

export interface Testimonial {
  id: string;
  name: string;
  country: string;
  tag: string;
  quote: string;
  likes: number;
  avatar: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah Mitchell",
    country: "GB",
    tag: "Gorilla Trekking",
    quote:
      "The gorilla trekking was the most humbling experience of my life. Just book it — no words can describe it.",
    likes: 247,
    avatar: img("photo-1494790108377-be9c29b29330", 100, 100),
    image: img("photo-1547970810-dc1eac37d174"),
  },
  {
    id: "marcus",
    name: "Marcus Torres",
    country: "US",
    tag: "Lake Kivu Kayaking",
    quote:
      "Lake Kivu at sunset is something otherworldly. Paddled to a little island and sat in silence for an hour. Rwanda, you changed me.",
    likes: 389,
    avatar: img("photo-1500648767791-00dcc994a43e", 100, 100),
    image: img("photo-1502680390469-be75c86b636f"),
  },
  {
    id: "yuki",
    name: "Yuki Nakamura",
    country: "JP",
    tag: "Kigali Cultural Tour",
    quote:
      "Kigali genuinely surprised me — cleanest city I've ever visited. The food tour was 10/10 and Diane is the most brilliant guide.",
    likes: 511,
    avatar: img("photo-1438761681033-6461ffad8d80", 100, 100),
    image: img("photo-1517248135467-4c7edcad34c4"),
  },
];

export interface Stat {
  value: string;
  label: string;
  icon: "smile" | "mountain" | "star" | "globe";
}

export const STATS: Stat[] = [
  { value: "1,200+", label: "Adventurers Yearly", icon: "smile" },
  { value: "42+", label: "Unique Experiences", icon: "mountain" },
  { value: "98%", label: "Satisfaction Rate", icon: "star" },
  { value: "5", label: "Languages Spoken", icon: "globe" },
];

export const TRUST_SIGNALS = [
  { icon: "ticket", label: "Gorilla permits included" },
  { icon: "shield-check", label: "Free cancellation 48h" },
  { icon: "badge-dollar", label: "Best price guarantee" },
  { icon: "shield", label: "24/7 verified guides" },
] as const;
