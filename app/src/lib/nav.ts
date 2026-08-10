export interface NavItem {
  label: string;
  to: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Adventures", to: "/adventures" },
  { label: "Stay", to: "/stay" },
  { label: "City Tours", to: "/city-tours" },
  { label: "About", to: "/about" },
];

export const FOOTER_LINKS = {
  explore: {
    title: "Explore",
    links: [
      { label: "Adventures", to: "/adventures" },
      { label: "City Tours", to: "/city-tours" },
      { label: "Stays", to: "/stay" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
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
