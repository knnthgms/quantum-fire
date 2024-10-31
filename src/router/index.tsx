import { lazy, Suspense } from "react";
import { Layout, Spin } from "antd";
import { Switch, Route } from "react-router-dom";
import CustomFooter from "../components/Footer";
import routes from "./config";
import { CSSReset, CustomFont, AntdStyles } from "../styles/styles";
import CustomHeader from "../components/CustomHeader";

const Router = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <CSSReset />
      <AntdStyles />
      <CustomFont />
      <CustomHeader />
      <Suspense fallback={<Spin />}>
        <Switch>
          {routes.map((routeItem) => {
            return (
              <Route
                key={routeItem.component}
                path={routeItem.path}
                exact={routeItem.exact}
                component={lazy(
                  () => import(`../pages/${routeItem.component}`)
                )}
              />
            );
          })}
        </Switch>
      </Suspense>
      <CustomFooter />
    </Layout>
  );
};

export default Router;
