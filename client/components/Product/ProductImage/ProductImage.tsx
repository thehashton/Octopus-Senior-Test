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

function ProductImage({ src, alt }: ProductImageProps) {
  const canTry = isUseableImageSrc(src);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.productImageContainer}>
      {!loaded && (
        <Image
          src="/no-image-icon.png"
          alt="No image available"
          fill
          className={styles.productImage}
        />
      )}
      {canTry && (
        <Image
          src={src}
          alt={alt}
          fill
          className={loaded ? styles.productImage : styles.hidden}
          onLoad={() => setLoaded(true)}
          onError={() => setLoaded(false)}
        />
      )}
    </div>
  );
}

export default ProductImage;
