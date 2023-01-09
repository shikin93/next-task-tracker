import Head from 'next/head';
import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Todo App</title>
    </Head>
    <div className="container max-w-3xl mx-auto px-5">
      <Navbar />
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
