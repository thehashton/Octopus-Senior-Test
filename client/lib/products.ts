export function formatPrice(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(pence / 100);
}

export type Product = {
  id: string;
  name: string;
  power: string;
  description: string;
  price: number;
  quantity: number;
  brand: string;
  weight: number;
  height: number;
  width: number;
  length: number;
  model_code: string;
  colour: string;
  img_url: string;
};

const query = `
  query Product($id: ID!) {
    Product(id: $id) {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;

// Hosted files for catalogue items whose remote img_url does not load.
const hostedProductImages: Record<string, string> = {
  "1": "/philips-plumen.jpg",
};

function resolveProductImage(product: Product): Product {
  const hostedImage = hostedProductImages[product.id];
  if (!hostedImage) return product;
  return { ...product, img_url: hostedImage };
}

// The GraphQL stub (json-graphql-server) only starts from `pnpm dev`.
// Vercel runs `next build` / `next start` and has no process to serve that API,
// so DEMO_MODE=true serves this copy of server/db.js instead of calling GRAPHQL_URL.
// id is a string to match the GraphQL ID scalar and the hostedProductImages key.
const demoProducts: Product[] = [
  {
    id: "1",
    name: "Energy saving light bulb",
    power: "25W",
    description:
      "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
    price: 1299,
    quantity: 4,
    brand: "Philips",
    weight: 77,
    height: 12.6,
    width: 6.2,
    length: 6.2,
    model_code: "E27 ES",
    colour: "Cool daylight",
    img_url: "https://i.ibb.co/2nzwxnQ/bulb.png",
  },
].map(resolveProductImage);

// Only the exact string "true" enables the fixture. Local .env.development sets
// "false", and an unset variable stays on the GraphQL fetch.
function isDemoMode() {
  return process.env.DEMO_MODE === "true";
}

export async function getProduct(id: string): Promise<Product> {
  // Skip the network call so a deploy can render without the local stub.
  if (isDemoMode()) {
    const product = demoProducts.find((item) => item.id === id);
    if (!product) {
      throw new Error(`Product ${id} not found`);
    }
    return product;
  }

  const response = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { id },
    }),
  });

  const data = await response.json();
  return resolveProductImage(data.data.Product);
}

const allProductsQuery = `
  query {
    allProducts {
      id
      name
      power
      description
      price
      quantity
      brand
      weight
      height
      width
      length
      model_code
      colour
      img_url
    }
  }
`;

export async function getProducts(): Promise<Product[]> {
  // Same fixture as getProduct, so the list and the detail page stay in sync.
  if (isDemoMode()) return demoProducts;

  const response = await fetch(process.env.GRAPHQL_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: allProductsQuery,
    }),
  });

  const data = await response.json();
  return (data.data.allProducts ?? []).map(resolveProductImage);
}
