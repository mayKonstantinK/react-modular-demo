import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login/LoadAsync";
import ModulesTest from "containers/ModulesTest";

function App({ match }) {
  return (
    <Suspense fallback={<div className="loading" />}>
      <Switch>
        {/* <Redirect exact from={`${match.url}/`} to={`${match.url}app/login`} /> */}
        <Route
          path={`${match.url}app/login`}
          render={(props) => <Login {...props} />}
        />
        <Route
          path={`${match.url}app/modules`}
          render={(props) => <ModulesTest {...props} />}
        />
        {/* <Redirect to={`${match.url}`} /> */}
      </Switch>
    </Suspense>
  );
}

export default App;
