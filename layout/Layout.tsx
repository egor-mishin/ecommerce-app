import React, { FC } from "react";
import { Record } from "immutable";
import { ILayoutProps } from "./ILayout.props";
import { AppContext, AppContextProvider } from "../context/app.context";

const Layout: FC<ILayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <div>
        {children}
      </div>
    </>
  );
};

// @ts-ignore
export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
