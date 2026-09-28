"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/Cart";
import styles from "./Header.module.css";

const Header = () => {
  const { count } = useCart();

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          className={styles.logo}
          src="/octopus-logo.svg"
          alt="Octopus Energy Logo"
          title="Go to home page"
          width={100}
          height={100}
        />
      </Link>
      <div className={styles.basketWrap}>
        <Image
          className={styles.basket}
          src="/basket.svg"
          alt="Basket"
          width={100}
          height={100}
        />
        {count > 0 && (
          <span className={styles.badge} aria-live="polite">
            {count}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
