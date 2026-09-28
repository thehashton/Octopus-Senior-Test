import { ProductImage } from "@/components/Product/ProductImage/product-image";
import { getProduct } from "@/lib/products";
import Image from "next/image";

export default async function Product() {
  const product = await getProduct("1");
  return (
    <div>
      <h1>Product Page</h1>
      <ProductImage src={product.img_url} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.img_url}</p>
    </div>
  );
}
