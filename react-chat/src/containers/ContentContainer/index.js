import React, { PureComponent, Fragment } from 'react';
import {
  SideBar,
  ChatRoom,
} from 'components';
import styles from './content-container.scss'

export default class ContentContainer extends PureComponent {
  render () {
    return (
      <div className={styles.container}>
        <ChatRoom />
        <SideBar />
      </div>
    )
  }
}