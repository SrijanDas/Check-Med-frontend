import StyledNavbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/Footer";

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
          </Switch>
        </Container>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
