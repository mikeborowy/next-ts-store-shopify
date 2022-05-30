import cn from "classnames";
import { FC, ReactNode } from "react";
import ReactFastMarquee from "react-fast-marquee"; // import package here
import styles from "./Marquee.module.css";

interface Props {
  children: ReactNode[] | ReactNode;
  direction?: "left" | "right";
  variant?: "primary" | "secondary";
  gradient?: boolean;
}

export const Marquee: FC<Props> = ({
  children,
  direction = "left",
  variant = "primary",
  gradient,
}) => {
  const rootClassName = cn(styles.root, {
    [styles.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassName}>
      {/* and this  */}
      <ReactFastMarquee
        speed={50}
        gradient={gradient}
        direction={direction}
        loop={0}
        play={true}
      >
        <div className={styles.container}>{children}</div>
      </ReactFastMarquee>
    </div>
  );
};
