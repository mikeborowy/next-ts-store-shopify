import { ReactNode } from "react";

type DummyComponentProps = {
  children: ReactNode;
};

export const DummyComponent = ({ children }: DummyComponentProps) => (
  <>{children}</>
);
