import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
};

const Button = ({
  children,
  fullWidth = false,
  href,
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
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
