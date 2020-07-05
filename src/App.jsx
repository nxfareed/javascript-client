import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ApolloProvider } from "@apollo/react-components";
import apolloClient from "./libs/apollo-client";
import Wrapper from "./pages/Login/Wrapper";
import ls from "local-storage";
import {
  ChildrenDemo,
  Trainee,
  Login,
  TextFieldDemo,
  InputDemo,
  NoMatch,
} from "./pages";
import { PrivateRoute, AuthRoute } from "./routes";
import { SnackBarProvider } from "./contexts";

const App = () => {
  return (
    <div>
      <SnackBarProvider>
        <ApolloProvider client={apolloClient}>
          {ls.get("token") ? (
            <Router>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/Trainee" />
                </Route>
                <AuthRoute path="/Login" component={Wrapper} />
                <PrivateRoute path="/ChildrenDemo" component={ChildrenDemo} />
                <PrivateRoute path="/Trainee" component={Trainee} />
                <PrivateRoute path="/TextFieldDemo" component={TextFieldDemo} />
                <PrivateRoute path="/InputDemo" component={InputDemo} />
                <PrivateRoute component={NoMatch} />
              </Switch>
            </Router>
          ) : (
            <Router>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/Login" />
                </Route>
                <AuthRoute path="/Login" component={Wrapper} />
                <PrivateRoute path="/ChildrenDemo" component={ChildrenDemo} />
                <PrivateRoute path="/Trainee" component={Trainee} />
                <PrivateRoute path="/TextFieldDemo" component={TextFieldDemo} />
                <PrivateRoute path="/InputDemo" component={InputDemo} />
                <PrivateRoute component={NoMatch} />
              </Switch>
            </Router>
          )}
        </ApolloProvider>
      </SnackBarProvider>
    </div>
  );
};

export default App;
