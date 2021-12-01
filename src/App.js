import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resources from './components/Resources';
import Navigation from './components/Navigation';

function App() {
  return(
    <>
       <Router basename={process.env.PUBLIC_URL}>
          <Navigation/>
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