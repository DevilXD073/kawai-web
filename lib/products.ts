export type ProductVariant = {
  name: string;
  price: number;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  price: number;
  originalPrice?: number;
  image?: string;
  badge?: "BEST SELLER" | "POPULAR" | "NEW" | "LIMITED";
  featured: boolean;
  popular: boolean;
  available: boolean;
  stock?: number;
  variants?: ProductVariant[];
  deliveryTime: string;
  requirements: string[];
  new?: boolean;
  limited?: boolean;
};

export const products: Product[] = [
  {
    id: "kws-001",
    slug: "discord-server-setup",
    name: "Discord Server Setup",
    description: "A polished community setup with channels, roles, permissions and a clean branded structure.",
    category: "Discord Services",
    price: 299,
    originalPrice: 399,
    badge: "BEST SELLER",
    featured: true,
    popular: true,
    available: true,
    stock: 8,
    deliveryTime: "1–2 days",
    requirements: ["Server invite with appropriate permissions", "Your preferred theme and requirements"]
  },
  {
    id: "kws-002",
    slug: "minecraft-server-setup",
    name: "Minecraft Server Setup",
    description: "Clean server configuration for communities, including core settings and plugin-ready structure.",
    category: "Gaming Services",
    price: 499,
    originalPrice: 699,
    badge: "POPULAR",
    featured: true,
    popular: true,
    available: true,
    stock: 5,
    deliveryTime: "2–3 days",
    requirements: ["Hosting access or required configuration files", "Server version"]
  },
  {
    id: "kws-003",
    slug: "discord-bot-setup",
    name: "Discord Bot Setup",
    description: "Configure a community bot with a practical command structure and branded server integration.",
    category: "Discord Services",
    price: 249,
    featured: true,
    popular: true,
    available: true,
    stock: 10,
    deliveryTime: "1–2 days",
    requirements: ["Bot token or bot application access", "Command requirements"]
  },
  {
    id: "kws-004",
    slug: "custom-server-branding",
    name: "Custom Server Branding",
    description: "A cohesive visual direction for your Discord or gaming community: names, colors, icons and layout.",
    category: "Digital Services",
    price: 349,
    originalPrice: 499,
    badge: "NEW",
    featured: true,
    popular: false,
    available: true,
    stock: 6,
    deliveryTime: "2–4 days",
    requirements: ["Brand name", "References or preferred aesthetic"]
  },
  {
    id: "kws-005",
    slug: "community-audit",
    name: "Community Audit",
    description: "A practical review of your community structure with focused recommendations for a cleaner experience.",
    category: "Digital Services",
    price: 199,
    featured: true,
    popular: true,
    available: true,
    stock: 12,
    deliveryTime: "1–2 days",
    requirements: ["Read-only access or screenshots", "Your goals for the community"]
  },
  {
    id: "kws-006",
    slug: "custom-order",
    name: "Custom Order",
    description: "Need something specific? Tell us what you need and we can discuss a tailored digital service.",
    category: "Special Deals",
    price: 0,
    badge: "LIMITED",
    featured: true,
    popular: false,
    available: true,
    deliveryTime: "Quoted per request",
    requirements: ["Detailed request", "Any relevant references or files"],
    limited: true
  },
  {
    id: "kws-007",
    slug: "discord-server-decorations",
    name: "Server Decorations",
    description: "Stylish text, category names and channel organization for a more polished community presentation.",
    category: "Discord Services",
    price: 149,
    featured: false,
    popular: true,
    available: true,
    stock: 15,
    deliveryTime: "1 day",
    requirements: ["Server structure or screenshots", "Preferred style"]
  },
  {
    id: "kws-008",
    slug: "bot-source-review",
    name: "Bot Source Review",
    description: "A focused technical review of an existing Discord bot source with actionable cleanup notes.",
    category: "Discord Services",
    price: 399,
    featured: false,
    popular: false,
    available: true,
    stock: 4,
    deliveryTime: "2–3 days",
    requirements: ["Source repository or archive", "Specific concerns, if any"]
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
