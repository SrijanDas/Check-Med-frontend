import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./pages/Logout/Logout";
import Activation from "./pages/Activation/Activation";
import SignupSuccess from "./pages/SignupSuccess";
import ShopCreate from "./pages/ShopCreate/ShopCreate";
import Contact from "./pages/Contact/Contact";
import Feedback from "./pages/Feedback/Feedback";

import { useSelector } from "react-redux";

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
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/feedback">
            <Feedback />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/login">
            {isAuthenticated ? <Redirect to="/" /> : <Login />}
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
            {isAuthenticated ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path="/createShop">
            {shop ? <ShopCreate /> : <Redirect to="/dashboard" />}
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
