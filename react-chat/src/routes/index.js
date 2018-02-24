import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
import { MainContainer } from 'containers';
import store from '../stores';

const link = new HttpLink({
  uri: 'http://localhost:3000/graphql',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MainContainer} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};

export default Root;
