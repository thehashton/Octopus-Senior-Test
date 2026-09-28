import { Product } from "@/components/Product";
import { getProduct } from "@/lib/products";

export default async function ProductPage() {
  const product = await getProduct("1");
  return (
    <div>
      <Product product={product} />
    </div>
  );
}
