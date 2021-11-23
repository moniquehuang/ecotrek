import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import Navibar from './components/Navibar';

function App() {
  const [geometry, setGeometry] = useState(null);
  return(
    <>
       <Router basename='/ecotrek'>
          <Navibar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/resources" component={Resources} />
          </Switch>
      </Router>
    </>
  )
}


export default App;