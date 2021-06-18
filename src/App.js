import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Hello from './Hello';
import Home from './Home';
import Chat from '../src/components/Chat'
function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Header />
          <AppBody>
            <Sidebar />
            <Switch>
              {/* <Route exact path="/" component={Header} /> */}
              <Route exact path="/" component={()=> <Chat />} />
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