import React from 'react';
import Header from './Header';
import Head from 'next/head';

const Layout = ({ children }) => (
  <>
    <Head>
        <title>Coding in Circles</title>
      </Head>
    <Header />
    {children}
  </>
);

export default Layout;
