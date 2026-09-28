import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";

const Header = () => {
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
      <Image
        className={styles.basket}
        src="/basket.svg"
        alt="Logo"
        width={100}
        height={100}
      />
    </header>
  );
};

export default Header;
