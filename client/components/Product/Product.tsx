import { Product as ProductType } from "@/lib/products";
import { ProductImage } from "./ProductImage";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <div>
      <ProductImage src={product.img_url} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.img_url}</p>
    </div>
  );
};

export default Product;
