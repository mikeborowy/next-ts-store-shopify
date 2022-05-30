import { Check } from "@components/icons";
import { isDarkColor } from "@helpers";
import cn from "classnames";
import styles from "./Swatch.module.css";

interface SwatchProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  label?: string;
  active?: boolean;
  variant?: "size" | "color" | string;
  onClick: () => void;
}

export const Swatch = ({
  color,
  label,
  variant,
  active,
  size = "md",
  ...rest
}: SwatchProps) => {
  label = label?.toLowerCase();
  variant = variant?.toLocaleLowerCase();

  const rootClassName = cn(styles.root, {
    [styles.active]: active,
    [styles.color]: color,
    [styles.size]: variant === "size",
    [styles.dark]: color && isDarkColor(color),
    [styles.sm]: size === "sm",
  });

  return (
    <button
      style={color ? { backgroundColor: color } : {}}
      className={rootClassName}
      {...rest}
    >
      {variant === "color" && active && (
        <span>
          <Check />
        </span>
      )}
      {variant === "size" ? label : null}
    </button>
  );
};
