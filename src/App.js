import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hello from './Hello';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route path="/home" component={()=> <Home />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
