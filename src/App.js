import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./pages/Logout/Logout";
import Activation from "./pages/Activation/Activation";

import { Provider } from "react-redux";
import store from "./store";
import Layout from "./layout/Layout";

function App() {
  const isAuthenticated = false;
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/logout">
              {isAuthenticated ? <Logout /> : <Login />}
            </Route>
            <Route path="/login">
              {isAuthenticated ? <Home /> : <Login />}
            </Route>
            <Route path="/sign-up">
              {isAuthenticated ? <Home /> : <SignUp />}
            </Route>
            <Route path="/activate/:uid/:token">
              <Activation />
            </Route>
            <Route path="/dashboard">
              {isAuthenticated ? <Dashboard /> : <Login />}
            </Route>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
