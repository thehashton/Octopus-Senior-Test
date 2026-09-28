"use client";

import { createContext, useContext, useState } from "react";

type CartContextValue = {
  count: number;
  addToCart: (quantity: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const addToCart = (quantity: number) => {
    setCount((current) => current + quantity);
  };

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const cart = useContext(CartContext);
  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return cart;
}

export default CartProvider;
