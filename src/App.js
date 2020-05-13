import React from "react";
import Nav from "./components/utility/nav";
import Home from "./components/pages/homeComponent/home";
import Projects from "./components/pages/projectsComponent/projects";
import Contact from "./components/pages/contactsComponent/contact";
import Footer from "./components/utility/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
