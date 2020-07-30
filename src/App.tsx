import React from "react";
import { Router } from "@reach/router";

import Login from "./pages/Login";
import LinkSet from "./pages/LinkSet";
import NotFound from "./pages/common/NotFound";
import RequireLogin from "./pages/RequireLogin/RequireLogin";

const App: React.FC = () => {
  return (
    <Router>
      <RequireLogin path="/*"></RequireLogin>
      <Login path="/login"></Login>
      <LinkSet path="/linkSet"></LinkSet>
      <NotFound default />
    </Router>
  );
};

export default App;
