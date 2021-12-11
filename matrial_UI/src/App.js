import React from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./dashboard/Dashboard";
import { SiteLayout } from "./components/SiteLayout";
import { Orders } from "./components/Orders";

function App() {
  return (
    <>
      <SiteLayout>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/Orders" render={() => <Orders />} />
        </Switch>
      </SiteLayout>
    </>
  );
}

export { App };
