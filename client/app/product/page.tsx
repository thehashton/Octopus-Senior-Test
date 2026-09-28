import { getProduct } from "../../lib/products";

export default async function Product() {
  const product = await getProduct("1");
  return (
    <div>
      <h1>Product Page</h1>
      <p>{product.name}</p>
    </div>
  )
}
