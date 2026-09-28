import { formatPrice, Product as ProductType } from "@/lib/products";
import { ProductImage } from "./ProductImage";
import { Purchase } from "./Purchase";
import styles from "./Product.module.css";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <article className={styles.ProductContainer}>
      <div className={styles.image}>
        <ProductImage src={product.img_url} alt={product.name} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.name}>{product.name}</h1>
        <p className={styles.meta}>
          {product.power} // Packet of {product.quantity}
        </p>
        <Purchase
          price={formatPrice(product.price)}
          maxQuantity={product.quantity}
        />
        <section className={styles.descriptionSection}>
          <h2 className={styles.sectionTitle}>Description</h2>
          <p className={styles.description}>{product.description}</p>
        </section>
        <section className={styles.specsSection}>
          <h2 className={styles.sectionTitle}>Specifications</h2>
          <dl className={styles.specs}>
            <dt>Brand</dt>
            <dd>{product.brand}</dd>
            <dt>Item weight (g)</dt>
            <dd>{product.weight}</dd>
            <dt>Dimensions (cm)</dt>
            <dd>
              {product.height} x {product.width} x {product.length}
            </dd>
            <dt>Item Model number</dt>
            <dd>{product.model_code}</dd>
            <dt>Colour</dt>
            <dd>{product.colour}</dd>
          </dl>
        </section>
      </div>
    </article>
  );
};

export default Product;
