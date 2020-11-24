import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const HomePage = lazy(() => import("./modules/homepage"));
const AboutPage = lazy(() => import("./modules/aboutpage"));
const ErrorPage = lazy(() => import("./modules/errorpage"));

const App: FC = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/" exact component={AboutPage} />
          <Route path="*" exact component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  </>
);
export default App;
