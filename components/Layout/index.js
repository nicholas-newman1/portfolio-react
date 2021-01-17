import React from 'react';
import Background from '../Background';
import Header from '../Header';
import Footer from '../Footer';
import ContactBubble from '../ContactBubble';

const Layout = (props) => {
  return (
    <div>
      <Background />
      <Header />

      <main className='main'>{props.children}</main>

      <ContactBubble />
      <Footer />
    </div>
  );
};

export default Layout;
