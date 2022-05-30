import { DummyComponent } from "@components";
import { LayoutProps } from "@components/shared";
import { UIProvider } from "@contexts/UIProvider";
import type { AppProps } from "next/app";
import { FunctionComponent } from "react";
import "../styles/globals.css";

type MyAppProps = AppProps & {
  Component: { Layout: FunctionComponent<LayoutProps> };
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Component.Layout ?? DummyComponent;

  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
