import React from 'react';
import 'rxjs';
import { render } from 'react-dom';
import Root from './routes';
import 'stylesheets/global.scss';

render(
  <Root />,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept();
}
