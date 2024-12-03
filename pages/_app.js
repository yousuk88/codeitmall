import Container from '@/components/Container';
import Header from '@/components/Header';
import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';
import Head from 'next/head'
import { Noto_Sans_KR, Single_Day } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
});

const singleDay = Single_Day({
  weight: ['400'],
  subsets: [],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codietmall</title>
        <link rel="icon" href="/logo.png" />
        <style>{`
    html {
      font-family: ${notoSansKR.style.fontFamily}, sans-serif;
    }
  `}</style>
      </Head>
      {/* <main className={notoSansKR.className}> */}
      {/* <main className={singleDay.className}> */}
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
      {/* </main> */}
    </>
  );
}