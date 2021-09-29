import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPages from "./pages/index/IndexPages";
import UserPages from "./pages/user/UserPages";
import { ToastContainer } from "react-toastify";
import ReposPages from "./pages/repos/ReposPages";

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={IndexPages} />
          <Route path="/user/:id" exact component={UserPages} />
          <Route path="/user/:id/repos" exact component={ReposPages} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
