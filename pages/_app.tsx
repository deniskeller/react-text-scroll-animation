import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import '../styles/globals.css';

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

export default function App({ Component, pageProps }: AppProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <>
      <Head>
        <title>React text scroll animations</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <ReactLenis root>
        <Component {...pageProps} />
      </ReactLenis>
    </>
  );
}
