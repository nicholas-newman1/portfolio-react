import Background from './components/Background/Background';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import ContactBubble from './components/ContactBubble/ContactBubble';

function App() {
  return (
    <>
      <Background />
      <Header />

      <main className='main'>
        <HomePage />
      </main>

      <ContactBubble />
      <Footer />
    </>
  );
}

export default App;
