import cakeChocolate from "@/assets/cake-chocolate.webp";
import cakeCheesecake from "@/assets/cake-cheesecake.webp";
import cakeCarrot from "@/assets/cake-carrot.webp";
import cakeTiramisu from "@/assets/cake-tiramisu.webp";
import cakeLemon from "@/assets/cake-lemon.webp";
import cakeRedvelvet from "@/assets/cake-redvelvet.webp";
import cakeNapoleon from "@/assets/cake-napoleon.webp";
import cakePistachio from "@/assets/cake-pistachio.webp";

export interface Ingredient {
  name: string;
  unit: string;
  pricePerUnit: number;
  defaultQty: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "signature" | "classic" | "seasonal";
  ingredients: Ingredient[];
}

export const products: Product[] = [
  {
    id: "chocolate-ganache",
    name: "Schokoladen-Ganache Torte",
    description: "Luxuriöse Schokoladenschichten mit samtiger Ganache und frischen Beeren. Ein Traum für jeden Schokoladenliebhaber.",
    price: 38,
    image: cakeChocolate,
    category: "signature",
    ingredients: [
      { name: "Belgische Schokolade", unit: "g", pricePerUnit: 0.04, defaultQty: 300 },
      { name: "Sahne", unit: "ml", pricePerUnit: 0.008, defaultQty: 400 },
      { name: "Frische Beeren", unit: "g", pricePerUnit: 0.03, defaultQty: 150 },
      { name: "Butter", unit: "g", pricePerUnit: 0.012, defaultQty: 200 },
      { name: "Mehl", unit: "g", pricePerUnit: 0.003, defaultQty: 250 },
    ],
  },
  {
    id: "strawberry-cheesecake",
    name: "Erdbeer-Käsekuchen",
    description: "Cremiger New-York-Style Käsekuchen mit frischen Erdbeeren auf knusprigem Mürbeteigboden.",
    price: 32,
    image: cakeCheesecake,
    category: "signature",
    ingredients: [
      { name: "Frischkäse", unit: "g", pricePerUnit: 0.01, defaultQty: 500 },
      { name: "Frische Erdbeeren", unit: "g", pricePerUnit: 0.025, defaultQty: 300 },
      { name: "Zucker", unit: "g", pricePerUnit: 0.003, defaultQty: 150 },
      { name: "Butterkekse", unit: "g", pricePerUnit: 0.008, defaultQty: 200 },
    ],
  },
  {
    id: "carrot-cake",
    name: "Karottenkuchen",
    description: "Saftiger Karottenkuchen mit Walnüssen und cremigem Frischkäse-Frosting nach Hausrezept.",
    price: 28,
    image: cakeCarrot,
    category: "classic",
    ingredients: [
      { name: "Karotten", unit: "g", pricePerUnit: 0.004, defaultQty: 300 },
      { name: "Walnüsse", unit: "g", pricePerUnit: 0.03, defaultQty: 100 },
      { name: "Frischkäse", unit: "g", pricePerUnit: 0.01, defaultQty: 200 },
      { name: "Zimt", unit: "g", pricePerUnit: 0.06, defaultQty: 10 },
    ],
  },
  {
    id: "tiramisu-cake",
    name: "Tiramisu Torte",
    description: "Klassisches italienisches Tiramisu als elegante Torte mit Mascarpone-Creme und Espresso.",
    price: 35,
    image: cakeTiramisu,
    category: "signature",
    ingredients: [
      { name: "Mascarpone", unit: "g", pricePerUnit: 0.015, defaultQty: 400 },
      { name: "Espresso", unit: "ml", pricePerUnit: 0.02, defaultQty: 200 },
      { name: "Löffelbiskuits", unit: "Stk", pricePerUnit: 0.08, defaultQty: 30 },
      { name: "Kakaopulver", unit: "g", pricePerUnit: 0.04, defaultQty: 30 },
    ],
  },
  {
    id: "lemon-drizzle",
    name: "Zitronenkuchen",
    description: "Erfrischender Zitronenkuchen mit Zitrusglasur und kandierten Zitronenscheiben.",
    price: 25,
    image: cakeLemon,
    category: "classic",
    ingredients: [
      { name: "Bio-Zitronen", unit: "Stk", pricePerUnit: 0.5, defaultQty: 4 },
      { name: "Butter", unit: "g", pricePerUnit: 0.012, defaultQty: 200 },
      { name: "Puderzucker", unit: "g", pricePerUnit: 0.004, defaultQty: 200 },
      { name: "Mehl", unit: "g", pricePerUnit: 0.003, defaultQty: 250 },
    ],
  },
  {
    id: "red-velvet",
    name: "Red Velvet Torte",
    description: "Samtiger Red Velvet Kuchen mit luxuriösem Cream-Cheese-Frosting und Samtkrümeln.",
    price: 34,
    image: cakeRedvelvet,
    category: "classic",
    ingredients: [
      { name: "Frischkäse", unit: "g", pricePerUnit: 0.01, defaultQty: 300 },
      { name: "Kakaopulver", unit: "g", pricePerUnit: 0.04, defaultQty: 30 },
      { name: "Buttermilch", unit: "ml", pricePerUnit: 0.005, defaultQty: 300 },
      { name: "Rote Lebensmittelfarbe", unit: "ml", pricePerUnit: 0.3, defaultQty: 15 },
    ],
  },
  {
    id: "napoleon",
    name: "Napoleon / Mille-Feuille",
    description: "Knuspriger Blätterteig mit zarter Vanillecreme – ein zeitloser Klassiker aus der europäischen Patisserie.",
    price: 30,
    image: cakeNapoleon,
    category: "seasonal",
    ingredients: [
      { name: "Blätterteig", unit: "g", pricePerUnit: 0.008, defaultQty: 500 },
      { name: "Vanilleschoten", unit: "Stk", pricePerUnit: 3.0, defaultQty: 2 },
      { name: "Milch", unit: "ml", pricePerUnit: 0.002, defaultQty: 500 },
      { name: "Puderzucker", unit: "g", pricePerUnit: 0.004, defaultQty: 100 },
    ],
  },
  {
    id: "pistachio-rose",
    name: "Pistazien-Rosen Torte",
    description: "Exotische Pistaziencreme mit zarten Rosenblättern – ein einzigartiges Geschmackserlebnis.",
    price: 42,
    image: cakePistachio,
    category: "seasonal",
    ingredients: [
      { name: "Pistazien", unit: "g", pricePerUnit: 0.05, defaultQty: 200 },
      { name: "Rosenwasser", unit: "ml", pricePerUnit: 0.08, defaultQty: 30 },
      { name: "Sahne", unit: "ml", pricePerUnit: 0.008, defaultQty: 400 },
      { name: "Rosenblätter", unit: "g", pricePerUnit: 0.1, defaultQty: 20 },
    ],
  },
];
