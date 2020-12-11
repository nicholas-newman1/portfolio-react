import stockSitePreview from './images/stock-site/stock-site-home-page-preview.jpg';
import stockSite1 from './images/stock-site/stock-site-home-page.png';
import stockSite2 from './images/stock-site/stock-site-djia-quote.png';
import stockSite3 from './images/stock-site/stock-site-search-results-page.png';
import stockSite4 from './images/stock-site/stock-site-cryptocurrencies-page.png';
import fakeStorePreview from './images/fake-store/fake-store-home-page-preview.jpg';
import fakeStore1 from './images/fake-store/fake-store-home-page.png';
import fakeStore2 from './images/fake-store/fake-store-product-page.png';
import ticTacToe1 from './images/tic-tac-toe/tic-tac-toe-new-game-menu.png';
import ticTacToe2 from './images/tic-tac-toe/tic-tac-toe-mid-game.png';

export const projects = [
  {
    id: 1,
    title: 'Stock Site',
    preview: {
      src: stockSitePreview,
      alt: 'Stock site home page',
    },
    images: [
      { src: stockSite1, alt: 'Stock site home page' },
      { src: stockSite2, alt: 'Stock site dow jones industrial average quote' },
      { src: stockSite3, alt: 'Stock site search results page' },
      { src: stockSite4, alt: 'Stock site cryptocurrencies page' },
    ],
    tags: [
      { text: 'html', backgroundColor: '#E54D26' },
      { text: 'css', backgroundColor: '#0071BD' },
      { text: 'js', backgroundColor: '#E7A229' },
      { text: 'react', backgroundColor: '#50BBD8' },
    ],
    features: [
      'Stock market news',
      'Real-time stock, forex, cryptocurrency, and commodity quotes',
      'Watchlist',
    ],
    skills: [
      'Reusable components + Hooks',
      'Fetching data from an API',
      'Context API',
      'BEM Naming Convention',
      'Responsive Design',
      'Git Workflow',
    ],
    liveUrl: 'https://cocky-mayer-6414d2.netlify.app',
    codeUrl: 'https://github.com/nicholas-newman1/stock-site',
  },
  {
    id: 2,
    title: 'Fake Store',
    preview: {
      src: fakeStorePreview,
      alt: 'fake store home page',
    },
    images: [
      { src: fakeStore1, alt: 'Fake store home page' },
      { src: fakeStore2, alt: 'Fake store product page' },
    ],
    tags: [
      { text: 'html', backgroundColor: '#E54D26' },
      { text: 'css', backgroundColor: '#0071BD' },
      { text: 'js', backgroundColor: '#E7A229' },
    ],
    features: ['Browse products', 'Add products to cart', 'Checkout'],
    skills: [
      'Reusable components + Hooks',
      'Fetching data from an API',
      'Context API',
      'BEM Naming Convention',
      'Responsive Design',
      'Git Workflow',
    ],
    liveUrl: 'https://elated-banach-5e96c0.netlify.app',
    codeUrl: 'https://github.com/nicholas-newman1/fake-store-vanilla',
  },
  {
    id: 3,
    title: 'Tic Tac Toe',
    preview: { src: ticTacToe1, alt: 'Tic tac toe new game menu' },
    images: [
      { src: ticTacToe1, alt: 'Tic tac toe new game menu' },
      { src: ticTacToe2, alt: 'Tic tac toe mid game' },
    ],
    tags: [
      { text: 'html', backgroundColor: '#E54D26' },
      { text: 'scss', backgroundColor: '#C6538C' },
      { text: 'js', backgroundColor: '#E7A229' },
    ],
    features: [
      'Singleplayer or Twoplayer',
      'Easy, medium, and hard (impossible to win) difficulties',
    ],
    skills: [
      'Module design pattern',
      'Understanding closure',
      'Reusable functions',
      'Injecting dynamic HTML',
      'SCSS Preprocessor',
      'BEM Naming Convention',
      'Responsive Design',
      'Git Workflow',
    ],
    liveUrl: 'https://stupefied-franklin-2a03b1.netlify.app',
    codeUrl: 'https://github.com/nicholas-newman1/tic-tac-toe',
  },
];
