import stockSitePreview from './images/stock-site/stock-site-home-page-preview.jpg';
import stockSite from './images/stock-site/stock-site-home-page.png';
import fakeStorePreview from './images/fake-store/fake-store-home-page-preview.jpg';
import fakeStore from './images/fake-store/fake-store-home-page.png';
import ticTacToePreview from './images/tic-tac-toe/tic-tac-toe-mid-game.png';
import ticTacToe from './images/tic-tac-toe/tic-tac-toe-mid-game.png';
import watchShopPreview from './images/watch-shop/watch-shop-home-page-preview.jpg';
import watchShop from './images/watch-shop/watch-shop-home-page.png';
import todoAppPreview from './images/todo-app/todo-app.png';
import todoApp from './images/todo-app/todo-app.png';

export const projects = [
  {
    id: 1,
    title: 'Stock Site',
    preview: { src: stockSitePreview, alt: 'Stock site home page' },
    fullImage: { src: stockSite, alt: 'Stock site home page' },
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
    preview: { src: fakeStorePreview, alt: 'fake store home page' },
    fullImage: { src: fakeStore, alt: 'Fake store home page' },
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
    preview: { src: ticTacToePreview, alt: 'Tic tac toe mid game' },
    fullImage: { src: ticTacToe, alt: 'Tic tac toe mid game' },
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
  {
    id: 4,
    title: 'Watch Shop',
    preview: { src: watchShopPreview, alt: 'Watch shop home page' },
    fullImage: { src: watchShop, alt: 'watch shop home page' },
    tags: [
      { text: 'html', backgroundColor: '#E54D26' },
      { text: 'scss', backgroundColor: '#C6538C' },
      { text: 'js', backgroundColor: '#E7A229' },
    ],
    features: ['Browse products'],
    skills: ['SCSS Preprocessor', 'BEM naming convention', 'Git Workflow'],
    liveUrl: 'https://boring-wing-3a4e41.netlify.app',
    codeUrl: 'https://github.com/nicholas-newman1/watch-shop',
  },
  {
    id: 5,
    title: 'Todo App',
    preview: { src: todoAppPreview, alt: 'Todo app' },
    fullImage: { src: todoApp, alt: 'Todo app' },
    tags: [
      { text: 'html', backgroundColor: '#E54D26' },
      { text: 'scss', backgroundColor: '#C6538C' },
      { text: 'js', backgroundColor: '#E7A229' },
    ],
    features: ['Browse products'],
    skills: ['SCSS Preprocessor', 'BEM naming convention', 'Git Workflow'],
    liveUrl: 'https://gallant-meninsky-30e418.netlify.app',
    codeUrl: 'https://github.com/nicholas-newman1/todo-app-vanilla',
  },
];
