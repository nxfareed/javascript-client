import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, AuthRoute } from "./routes/index";
import {
  TextFieldDemo,
  InputDemo,
  CalculatorDemo,
  Trainee,
  NotFound,
  Login,
} from "./pages/index";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/Trainee" />
          </Route>
          <AuthRoute path="/Login" component={Login} />
          <PrivateRoute path="/ChildrenDemo" component={ChildrenDemo} />
          <PrivateRoute path="/Trainee" component={Trainee} />
          <PrivateRoute path="/TextFieldDemo" component={TextFieldDemo} />
          <PrivateRoute path="/InputDemo" component={InputDemo} />
          <PrivateRoute component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
