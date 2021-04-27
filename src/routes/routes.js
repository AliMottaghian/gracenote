import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

const homeRoute = React.lazy(() => import("../pages/Home/Home"));
const detailsRoute = React.lazy(() => import("../pages/Details/Details"));
const notFoundRoute = React.lazy(() => import("../pages/NotFound"));

const Routes = () => {
  return (
    <React.Suspense fallback={<div className="textCenter">Loading ...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={homeRoute} />
          <Route path="/detail/:id" component={detailsRoute} />
          <Route component={notFoundRoute} />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default Routes;
