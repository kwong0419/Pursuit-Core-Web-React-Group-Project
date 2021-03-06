import React from "react";
// import "./App.css";

import LoginPage from "./components/LoginPage/LoginPage";
import NavBar from "./components/NavBar";
import Profile from "./components/ProfilePage/Profile";
import Feed from "./components/FeedPage/Feed";
import SignUpForm from "./components/LoginPage/SignUpForm";
import Results from "./components/ResultsPage/Results";

import { Route, Switch, useLocation, Redirect } from "react-router-dom";

function App() {
  const NavBarView = () => {
    let location = useLocation();

    if (location.pathname === "/login" || location.pathname === "/signup") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="App">
      {NavBarView() ? <NavBar /> : null}
      <Switch>
        <Route exact path={"/"}>
          <Redirect to="/login" />
        </Route>
        <Route path={"/login"}>
          <LoginPage />
        </Route>
        <Route exact to path={"/results/:searchInput"}>
          <Results />
        </Route>
        <Route exact to path={"/signup"}>
          <SignUpForm />
        </Route>
        <Route exact to path={"/feedpage"}>
          <Feed />
        </Route>
        <Route exact to path={"/profilepage"}>
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
