import cn from "classnames";
import { ReactNode } from "react";
import styles from "./Grid.module.css";

interface GridProps {
  children: ReactNode;
  layout?: "A" | "B";
}

export const Grid = ({ children, layout = "A" }: GridProps) => {
  const rootClassName = cn(styles.root, {
    [styles.layoutA]: layout === "A",
    [styles.layoutB]: layout === "B",
  });

  return <div className={rootClassName}>{children}</div>;
};
