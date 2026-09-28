"use client";

import { useEffect } from "react";
import { Button } from "@/components/Button";
import styles from "./notFound.module.css";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className={styles.notFound}>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.message}>
        The catalogue could not be loaded. Check your connection and try again.
      </p>
      <Button onClick={reset}>Try again</Button>
    </main>
  );
}
