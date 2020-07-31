import React from "react";
import { Router } from "@reach/router";

import Login from "./pages/Login";
import LinkSet from "./pages/LinkSet";
import Page404 from "./pages/common/Page404";
import RequireLogin from "./pages/RequireLogin/RequireLogin";

const App: React.FC = () => {
  return (
    <Router>
      <RequireLogin path="/*"></RequireLogin>
      <Login path="/login"></Login>
      <LinkSet path="/linkSet"></LinkSet>
      <Page404 default />
    </Router>
  );
};

export default App;
