import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Header } from 'components';
import { ContentContainer } from 'containers';
import { ping } from '../../actions';

class MainContainer extends PureComponent {
  render () {
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

export default connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(MainContainer)