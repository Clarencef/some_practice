import React, { PureComponent } from 'react';
import styles from './chat-room.scss';

export default class ChatRoom extends PureComponent {
  render () {
    return (
      <main className={styles['container']}>React chat room</main>
    );
  }
}

