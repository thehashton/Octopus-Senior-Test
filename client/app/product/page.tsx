import { getProduct } from "../../lib/products";
import Image from "next/image";

export default async function Product() {
  const product = await getProduct("1");
  return (
    <div>
      <h1>Product Page</h1>
      <Image src={product.img_url} alt={product.name} width={640} height={640} />
      <p>{product.name}</p>
      <p>{product.img_url}</p>
    </div>
  )
}
