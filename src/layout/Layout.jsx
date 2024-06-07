import React from 'react';
import Header from '../Section/Header/Header';
import Footer from '../Section/Footer/Footer';
import './layout.css';


const Layout = ({ children, setRoute }) => {
  return (
    <div>
      <Header setRoute={setRoute} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

