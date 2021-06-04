import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ArrowUpCircle } from 'react-feather';
import Header from './Header';
import About from './About';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={About} />
        </Switch>
      </Router>
      <div className='back-to-top-section'>
        <a href='#home' className='back-to-top-text'>
          Back to Top
        </a>
        <ArrowUpCircle color='#ff48fa' size={24} />
      </div>
    </div>
  );
}

export default App;
