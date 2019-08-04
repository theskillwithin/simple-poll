import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import "normalize.css";
import "./global.css";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
