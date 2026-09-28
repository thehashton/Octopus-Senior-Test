import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  loading?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  fullWidth = false,
  href,
  loading = false,
  onClick,
}: ButtonProps) => {
  const className = fullWidth
    ? `${styles.button} ${styles.fullWidth}`
    : styles.button;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={loading}
      aria-busy={loading || undefined}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </button>
  );
};

export default Button;
