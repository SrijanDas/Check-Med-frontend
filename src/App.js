import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";

import useStyles from "./style";

function App() {
  const classes = useStyles();

  return (
    <Router>
      <ScrollToTop />
      <Navbar navbarBrand="CheckMeds" />

      <div className={classes.root}>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
