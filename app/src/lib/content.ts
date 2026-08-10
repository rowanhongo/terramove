/**
 * Static demo content for the TerraMove marketing site (UI-only).
 * Imagery uses Unsplash source URLs so the build has no local binary assets.
 */

export const img = (id: string, w = 800, h = 600) =>
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
