import React from "react";
import { Switch, Route } from "react-router-dom";

import RegisterForm from "./components/registerForm/RegisterForm";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile/:username" component={Profile} />
        <Route exact path="*" component={NotFound} />
        <Route exact path="/components/registerForm" component={RegisterForm} />
      </Switch>
    );
  }
}

export default App;
