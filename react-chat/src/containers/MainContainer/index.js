import React, { PureComponent, Fragment } from 'react';
import { Header } from 'components';
import { ContentContainer } from 'containers';

export default class MainContainer extends PureComponent {
  render () {
    return (
      <div className='main-container'>
        <Header/>
        <ContentContainer/>
      </div>
    )
  }
}