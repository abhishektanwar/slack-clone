import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hello from './Hello';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            asfs
            <Switch>
              {/* <Route exact path="/" component={Header} /> */}
              <Route path="/home" component={()=> <Home />} />
            </Switch>
          </AppBody>
        
          
        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;