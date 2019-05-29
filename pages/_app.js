// @flow
import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withReduxStore from '../lib/with-redux-store';

class StoreApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(StoreApp);
