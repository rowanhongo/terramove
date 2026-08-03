export interface NavItem {
  label: string;
  to: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Adventures", to: "/adventures" },
  { label: "Stay", to: "/stay" },
  { label: "City Tours", to: "/city-tours" },
  { label: "Airport", to: "/airport" },
  { label: "AI Planner", to: "/ai-planner" },
  { label: "About", to: "/about" },
];

export const FOOTER_LINKS = {
  explore: {
    title: "Explore",
    links: [
      { label: "Adventures", to: "/adventures" },
      { label: "City Tours", to: "/city-tours" },
      { label: "Stays", to: "/stay" },
      { label: "Airport Pickup", to: "/airport" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "AI Planner", to: "/ai-planner" },
      { label: "Contact", to: "/contact" },
    ],
  },
  support: {
    title: "Support",
    links: [
      { label: "Cancellation Policy", to: "/contact" },
      { label: "Safety Info", to: "/contact" },
      { label: "Accessibility", to: "/contact" },
    ],
  },
} as const;
