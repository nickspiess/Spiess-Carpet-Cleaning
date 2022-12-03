import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages'
import About from './pages/about'
import Contact from './pages/contact'
import Testimonials from './pages/testimonials'
import Quote from './pages/quote'
import Services from './pages/services'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/testimonials" exact component={Testimonials} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/quote" exact component={Quote} />
      </Switch>
    </Router>
  );
}

export default App;
