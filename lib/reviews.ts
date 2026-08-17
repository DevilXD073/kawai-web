export type Review = {
  id: string;
  username: string;
  rating: number;
  review: string;
  product: string;
  date: string;
  demo: boolean;
};

// Replace these demo records with genuine customer reviews before publishing.
export const reviews: Review[] = [
  { id: "demo-1", username: "Demo Customer", rating: 5, review: "Demo review — replace with a genuine customer review before launch.", product: "Discord Server Setup", date: "Demo", demo: true },
  { id: "demo-2", username: "Example User", rating: 5, review: "Placeholder content for the review layout only.", product: "Community Audit", date: "Demo", demo: true },
  { id: "demo-3", username: "Sample Buyer", rating: 4, review: "Sample review content. Add verified customer feedback here later.", product: "Server Decorations", date: "Demo", demo: true }
];
