import '@pages/globals.css';
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import config from '@utils/next-seo/next-seo.json';
import { createEmotionCache } from '@utils/emotion/emotion';
import { DefaultSeo } from 'next-seo';

type MyAppProps = {
  emotionCache?: EmotionCache;
} & AppProps;

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <DefaultSeo {...config} />
      <Component {...pageProps} />;
    </CacheProvider>
  );
}

export default MyApp;
