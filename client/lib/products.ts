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

  export async function getProduct(id: string): Promise<Product> {
    const response = await fetch(process.env.GRAPHQL_URL!, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: { id },
        }),
    });

    const data = await response.json();
    return data.data.Product;
  }