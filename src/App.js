import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Dashboard from "./pages/Dashboard/Dashboard";
import Logout from "./pages/Logout/Logout";
import Feedback from "./pages/Feedback/Feedback";
import Activation from "./pages/Activation/Activation";

import { useSelector } from "react-redux";
import Layout from "./layout/Layout";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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
            {isAuthenticated ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route path="/sign-up">
            {isAuthenticated ? <Redirect to="/" /> : <SignUp />}
          </Route>
          <Route path="/activate/:uid/:token">
            <Activation />
          </Route>
          <Route path="/dashboard">
            {isAuthenticated ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
