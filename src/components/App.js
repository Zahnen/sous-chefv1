import React from "react";
import NavBar from "./NavBar";
import SignIn from './SignIn';
import RecipeControl from "./RecipeControl";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {

  return(
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path = "/">
            <div className="container">
              <RecipeControl />
            </div>
          </Route>
          <Route path = "/signin">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;