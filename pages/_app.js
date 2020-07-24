import React from 'react';
import App, { Container } from 'next/app';

// Stylings
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.scss';


class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }


  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp
