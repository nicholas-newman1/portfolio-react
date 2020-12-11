import Background from './components/Background/Background';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Background />
      <Router>
        <Header />

        <main className='container'>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
