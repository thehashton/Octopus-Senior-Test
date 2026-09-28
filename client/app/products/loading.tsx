import { ProductCardSkeleton } from "@/components/Skeleton";
import styles from "./productsPage.module.css";

export default function ProductsLoading() {
  return (
    <main aria-busy="true" aria-label="Loading products">
      <div className={styles.productsContainer}>
        <ProductCardSkeleton />
      </div>
    </main>
  );
}
