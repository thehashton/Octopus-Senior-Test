import { Product } from "@/components/Product";
import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductPage() {
  const product = await getProduct("1");

  if (!product) notFound();

  return (
    <div>
      <Product product={product} />
    </div>
  );
}
