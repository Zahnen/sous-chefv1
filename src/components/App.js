import React from "react";
import NavBar from "./NavBar";
import Signin from './Signin';
import RecipeControl from "./RecipeControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return(
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path = "/signin">
            <Signin />
          </Route>
          <Route path = "/">
            <RecipeControl />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;