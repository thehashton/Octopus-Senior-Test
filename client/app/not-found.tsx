import Link from "next/link";
import styles from "./notFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.notFound}>
      <img
        className={styles.logo}
        src="https://static.octopuscdn.com/constantine/constantine.svg"
        alt="Constantine, the Octopus Energy mascot"
        width={100}
        height={100}
      />
      <h1 className={styles.title}>Product not found</h1>
      <p className={styles.message}>
        That product is not in the catalogue. Check the link or browse the list.
      </p>
      <Link href="/products" className={styles.link}>
        Back to products
      </Link>
    </main>
  );
}
