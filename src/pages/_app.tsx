import React, {FC} from 'react';
import {AppProps} from 'next/app';
import '../styles/globall.scss'
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
    <Component {...pageProps} />
);

export default WrappedApp;
