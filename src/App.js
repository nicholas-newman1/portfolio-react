import Background from './components/Background/Background';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import ContactBubble from './components/ContactBubble/ContactBubble';
import ProjectPage from './pages/ProjectPage/ProjectPage';

function App() {
  return (
    <Router>
      <Background />
      <Header />

      <main className='main'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/project/:id' component={ProjectPage} />
        </Switch>
      </main>

      <ContactBubble />
      <Footer />
    </Router>
  );
}

export default App;
