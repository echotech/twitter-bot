import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your tweet content in seconds."
          />
          <meta property="og:site_name" content="gptweet.co" />
          <meta
            property="og:description"
            content="Generate your tweet content in seconds."
          />
          <meta property="og:title" content="AI Tweet Writer" />
          <meta name="twitter:title" content="AI Tweet Writer" />
          <meta
            name="twitter:description"
            content="Generate your tweet content in seconds."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
