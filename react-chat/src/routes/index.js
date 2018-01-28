import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MainContainer } from 'containers';

const Root = () => {
  return  (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={MainContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Root;