import { Button } from "@/components/Button";
import { formatPrice, Product } from "@/lib/products";
import { ProductImage } from "../ProductImage";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <article className={styles.productCard}>
      <ProductImage src={product.img_url} alt={product.name} />
      <h2 className={styles.name}>{product.name}</h2>
      <p className={styles.meta}>
        {product.power} // Packet of {product.quantity}
      </p>
      <p className={styles.price}>{formatPrice(product.price)}</p>
      <Button href={`/products/${product.id}`} fullWidth>
        View Product
      </Button>
    </article>
  );
};

export default ProductCard;
