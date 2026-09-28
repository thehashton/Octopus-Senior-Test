"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/Button";
import { useCart } from "@/components/Cart";
import { Quantity } from "@/components/Quantity";
import styles from "../Product.module.css";

const ADD_FEEDBACK_MS = 400;

const Purchase = ({ price }: { price: string }) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart } = useCart();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleAddToCart = () => {
    if (isAdding) return;

    setIsAdding(true);
    addToCart(quantity);
    timeoutRef.current = setTimeout(() => {
      setIsAdding(false);
      timeoutRef.current = null;
    }, ADD_FEEDBACK_MS);
  };

  return (
    <>
      <div className={styles.purchase}>
        <p className={styles.price}>{price}</p>
        <Quantity value={quantity} onChange={setQuantity} />
      </div>
      <Button fullWidth loading={isAdding} onClick={handleAddToCart}>
        Add to cart
      </Button>
    </>
  );
};

export default Purchase;
