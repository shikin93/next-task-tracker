import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => (
  <>
    <div className="container mx-auto px-5">
      <Navbar />
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
