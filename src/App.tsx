import React from "react";
import { Router } from "@reach/router";

import Login from "./pages/Login";
import NotFound from "./pages/common/NotFound";
import RequireLogin from "./pages/RequireLogin/RequireLogin";

const App: React.FC = () => {
  return (
    <Router>
      <RequireLogin path="/*"></RequireLogin>
      <Login path="/login"></Login>
      <NotFound default />
    </Router>
  );
};

export default App;
