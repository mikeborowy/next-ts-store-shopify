import { CartSidebar } from "@components/cart";
import { Footer, Navbar, Sidebar } from "@components/shared";
import { ApiProvider } from "@contexts/ApiProvider";
import { useUI } from "@contexts/UIProvider";
import { ReactNode } from "react";
import styles from "./Layout.module.css";

export interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { isSidebarOpen, onCloseSidebar } = useUI();

  return (
    <ApiProvider>
      <div className={styles.root}>
        <Navbar />
        <Sidebar isOpen={isSidebarOpen} onClose={onCloseSidebar}>
          <CartSidebar />
        </Sidebar>
        <main className="fit">{children}</main>
        <Footer />
      </div>
    </ApiProvider>
  );
};
