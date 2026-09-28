"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./ProductImage.module.css";

type ProductImageProps = {
  src: string;
  alt: string;
};

// Check if the image src is useable
function isUseableImageSrc(src: string) {
  return (
    src.startsWith("/") ||
    src.startsWith("https://") ||
    src.startsWith("http://")
  );
}

export function ProductImage({ src, alt }: ProductImageProps) {
  // If the image src is not useable, set the failed state to true
  const [failed, setFailed] = useState(() => !isUseableImageSrc(src));

  if (failed) {
    return (
      <div
        className={styles.productImageContainer}
        role="img"
        aria-label="No Image Available"
      >
        <Image
          src="/no-image-icon.png"
          alt="No Image Available"
          width={300}
          height={250}
        />
      </div>
    );
  }

  return (
    <div className={styles.productImageContainer}>
      <Image
        src={failed ? "/no-image-icon.png" : src}
        alt={failed ? "No image available" : alt}
        fill
        className={styles.productImage}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
