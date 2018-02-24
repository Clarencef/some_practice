import React, { PureComponent, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { Header } from 'components';
import { ContentContainer } from 'containers';
import { ping } from '../../actions';
import gql from 'graphql-tag';

class MainContainer extends PureComponent {
  render () {
    console.warn(this.props);
    return (
      <div className='main-container'>
        <Header/>
        <ContentContainer/>
        <div>{`isPinging: ${this.props.isPinging}`}</div>
        <button onClick={this.props.ping}>click</button>
      </div>
    )
  }
}

const mapQueriesToProps = (gql`
  query {
    allUsers {
      id
      email
    }
  }
`);

export default graphql(mapQueriesToProps)(MainContainer);

