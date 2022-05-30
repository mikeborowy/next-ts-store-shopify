import { ComponentType, FC, HTMLAttributes, ReactNode } from "react";

interface StylingContainerProps {
  children: ReactNode | ReactNode[];
  htmlElement?: ComponentType<HTMLAttributes<HTMLElement>>;
}

export const StylingContainer: FC<StylingContainerProps> = ({
  children,
  htmlElement: Component = "div",
}) => {
  return <Component className="px-6 mx-auto max-w-8xl">{children}</Component>;
};
