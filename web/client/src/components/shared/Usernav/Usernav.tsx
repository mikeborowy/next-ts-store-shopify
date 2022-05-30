import { Bag as Cart, Heart } from "@components/icons";
import { useUI } from "@contexts/UIProvider/UIProvider";
import Link from "next/link";
import styles from "./Usernav.module.css";

export const Usernav = () => {
  const { onOpenSidebar } = useUI();

  // const { data } = useCart();

  // const itemsCount =
  //   data?.lineItems.reduce((count: number, item: LineItem) => {
  //     return count + item.quantity;
  //   }, 0) ?? 0;

  return (
    <nav>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Cart onClick={onOpenSidebar} />
          {/* {itemsCount > 0 && (
            <span className={styles.bagCount}>{itemsCount}</span>
          )} */}
        </li>
        <li className={styles.item}>
          <Link href="/wishlist">
            <a>
              <Heart />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
