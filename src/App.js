import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./pages/Logout/Logout";
import Activation from "./pages/Activation/Activation";
import Shop from "./pages/Shop/Shop";
import SignupSuccess from "./pages/SignupSuccess";
import Layout from "./layout/Layout";

import { useSelector } from "react-redux";
import Orders from "./pages/Orders/Orders";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const shop = useSelector((state) => state.shop.shop);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Redirect to="/" />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            {isAuthenticated ? <Redirect to="/shop" /> : <Login />}
          </Route>
          <Route path="/sign-up">
            {isAuthenticated ? <Redirect to="/" /> : <SignUp />}
          </Route>
          <Route path="/signup-success">
            {isAuthenticated ? <Redirect to="/" /> : <SignupSuccess />}
          </Route>
          <Route path="/activate/:uid/:token">
            <Activation />
          </Route>
          <Route path="/dashboard">
            {isAuthenticated && shop ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/shop">
            {isAuthenticated ? <Shop /> : <Redirect to="/login" />}
          </Route>
          <Route path="/orders">
            {isAuthenticated && shop ? <Orders /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
