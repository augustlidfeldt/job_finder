import '@/styles/globals.css'
import '@/styles/index.css'
import { Store } from '@reduxjs/toolkit';

import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../store/index';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
  );
}
