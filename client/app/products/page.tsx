import { getProducts } from "@/lib/products";
import { ProductCard } from "@/components/Product/ProductCard";
import styles from "./productsPage.module.css";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main>
      <div className={styles.productsContainer}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
