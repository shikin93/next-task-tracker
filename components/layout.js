import Head from 'next/head';
import React from 'react';
import Navbar from './navbar';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Todo App</title>
    </Head>
    <div className="container mx-auto max-w-3xl px-5">
      <Navbar />
      <main>{children}</main>
    </div>
  </>
);

export default Layout;
