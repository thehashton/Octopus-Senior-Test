"use client";

import styles from "./Quantity.module.css";

const Quantity = ({
  value,
  onChange,
  max,
}: {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}) => {
  const atMax = max !== undefined && value >= max;

  return (
    <div className={styles.quantity}>
      <span className={styles.label} id="quantity-label">
        Qty
      </span>
      <div
        className={styles.controls}
        role="group"
        aria-labelledby="quantity-label"
      >
        <button
          type="button"
          className={`${styles.control} ${styles.decrease}`}
          aria-label="Decrease quantity"
          disabled={value <= 1}
          onClick={() => onChange(Math.max(1, value - 1))}
        >
          <svg className={styles.icon} viewBox="0 0 18 18" aria-hidden="true">
            <rect x="2" y="7" width="14" height="4" rx="2" />
          </svg>
        </button>
        <span className={styles.value} aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          className={`${styles.control} ${styles.increase}`}
          aria-label="Increase quantity"
          disabled={atMax}
          onClick={() =>
            onChange(max !== undefined ? Math.min(max, value + 1) : value + 1)
          }
        >
          <svg className={styles.icon} viewBox="0 0 18 18" aria-hidden="true">
            <rect x="7" y="0" width="4" height="18" rx="2" />
            <rect x="0" y="7" width="18" height="4" rx="2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Quantity;
