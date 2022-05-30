import { LoadingDots } from "@components/ui";
import cn from "classnames";
import {
  ButtonHTMLAttributes,
  ComponentType,
  HTMLAttributes,
  ReactNode,
} from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  isLoading?: boolean;
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>;
  href?: string;
}

export const Button = ({
  children,
  className,
  isLoading = false,
  Component = "button",
  ...rest
}: ButtonProps) => {
  const rootClassName = cn(styles.root, className, {
    [styles.loading]: isLoading,
  });

  return (
    <Component className={rootClassName} type="button" {...rest}>
      {children}
      {isLoading && (
        <i className="pl-2 m-0 flex">
          <LoadingDots />
        </i>
      )}
    </Component>
  );
};
