import { Usernav } from "@components/shared";
import { StylingContainer } from "@components/ui";
import Link from "next/link";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <StylingContainer>
      <div className={styles.root}>
        <div className="flex flex-1 items-center">
          <Link href="/">
            <a className={styles.logo}>NEXT_STORE</a>
          </Link>
          <nav className="ml-6 space-x-6">
            <Link href="/">
              <a className={styles.link}>All</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Clothes</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Accesories</a>
            </Link>
            <Link href="/">
              <a className={styles.link}>Shoes</a>
            </Link>
          </nav>
          <div className="flex flex-1 justify-end space-x-8">
            <Usernav />
          </div>
        </div>
      </div>
    </StylingContainer>
  );
};
