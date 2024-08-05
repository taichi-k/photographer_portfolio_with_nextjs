import Head from "next/head";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <title>Taichi Kosugi Portfolio</title>
          <meta name="description" content="フォトグラファー - 小杉太一" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} count />
    </>
  );
}
