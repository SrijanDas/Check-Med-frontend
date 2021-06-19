import StyledNavbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

import ScrollToTop from "./components/ScrollToTop";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <StyledNavbar />

        <Container>
          <Switch>
            <Route exact path="/">
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
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
