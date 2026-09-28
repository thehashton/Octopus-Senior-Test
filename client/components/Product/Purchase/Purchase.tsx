"use client";

import { useState } from "react";
import { Button } from "@/components/Button";
import { useCart } from "@/components/Cart";
import { Quantity } from "@/components/Quantity";
import styles from "../Product.module.css";

const Purchase = ({ price }: { price: string }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <>
      <div className={styles.purchase}>
        <p className={styles.price}>{price}</p>
        <Quantity value={quantity} onChange={setQuantity} />
      </div>
      <Button fullWidth onClick={() => addToCart(quantity)}>
        Add to cart
      </Button>
    </>
  );
};

export default Purchase;
