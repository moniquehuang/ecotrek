import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import Navibar from './components/Navibar';

function App() {
  const [geometry, setGeometry] = useState(null);
  return(
    <>
       <Router basename={process.env.PUBLIC_URL}>
          <Navibar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={Resources} />
          </Switch>
      </Router>
    </>
  )
}


export default App;