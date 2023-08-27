import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";
import '../styles/globall.scss'
import { ThemeProvider } from "next-themes";
const WrappedApp: FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class" enableSystem={true}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default wrapper.withRedux(WrappedApp);
