import Product from "@/components/Product";
import { ProductImage } from "@/components/Product/ProductImage/ProductImage";
import { getProduct } from "@/lib/products";
import Image from "next/image";

export default async function ProductPage() {
  const product = await getProduct("1");
  return (
    <div>
      <Product product={product} />
    </div>
  );
}
