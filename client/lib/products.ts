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

export async function getProduct(id: string): Promise<Product> {
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
