import Background from './components/Background/Background';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Background />
      <Header />

      <main className='main container'>
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
