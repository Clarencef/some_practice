import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainContainer } from 'containers';
import store from '../stores';

const Root = () => {
  return  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={MainContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default Root;