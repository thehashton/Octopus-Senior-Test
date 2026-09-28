import { Product as ProductType } from "@/lib/products";
import { ProductImage } from "./ProductImage";
import styles from "./Product.module.css";

function formatPrice(pence: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(pence / 100);
}

const Product = ({ product }: { product: ProductType }) => {
  return (
    <article className={styles.ProductContainer}>
      <div className={styles.image}>
        <ProductImage src={product.img_url} alt={product.name} />
      </div>
      <div className={styles.details}>
        <h1 className={styles.name}>{product.name}</h1>
        <p>
          {product.power} // Packet of {product.quantity}
        </p>
        <p>{formatPrice(product.price)}</p>

        <h2>Description</h2>
        <p>{product.description}</p>

        <h2>Specifications</h2>
        <dl>
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
      </div>
    </article>
  );
};

export default Product;
