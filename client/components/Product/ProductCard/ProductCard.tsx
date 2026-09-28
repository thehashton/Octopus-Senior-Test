import { Product } from "@/lib/products";
import styles from "./ProductCard.module.css";
import { ProductImage } from "../ProductImage";
import Link from "next/link";
import { Button } from "@/components/Button";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.productCard}>
      <ProductImage src={product.img_url} alt={product.name} />
      <p>{product.name}</p>
      <Link href={`/products/${product.id}`}>
        <Button>View Product</Button>
      </Link>
    </div>
  );
};

export default ProductCard;
