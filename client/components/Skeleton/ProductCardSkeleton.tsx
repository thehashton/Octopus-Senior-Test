import Skeleton from "./Skeleton";
import styles from "./Skeleton.module.css";

const ProductCardSkeleton = () => {
  return (
    <div className={styles.productCard} aria-hidden="true">
      <Skeleton className={styles.cardImage} />
      <Skeleton className={styles.cardTitle} />
      <Skeleton className={styles.cardMeta} />
      <Skeleton className={styles.cardPrice} />
      <Skeleton className={styles.cardButton} />
    </div>
  );
};

export default ProductCardSkeleton;
