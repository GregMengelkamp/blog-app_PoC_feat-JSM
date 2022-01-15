import React from 'react';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps } : { Component: any, pageProps: any}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
