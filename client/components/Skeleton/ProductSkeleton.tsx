import Skeleton from "./Skeleton";
import styles from "./Skeleton.module.css";

const ProductSkeleton = () => {
  return (
    <div className={styles.product} aria-hidden="true">
      <Skeleton className={styles.productImage} />
      <div className={styles.productDetails}>
        <Skeleton className={styles.productTitle} />
        <Skeleton className={styles.productMeta} />
        <div className={styles.productPriceRow}>
          <Skeleton className={styles.productPrice} />
          <Skeleton className={styles.productQty} />
        </div>
        <Skeleton className={styles.productButton} />
        <div className={styles.productSection}>
          <Skeleton className={styles.productSectionLine} />
          <Skeleton className={styles.productSectionLine} />
          <Skeleton className={styles.productSectionLineShort} />
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
