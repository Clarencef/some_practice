import React, { PureComponent } from 'react';
import styles from './header.scss';

export default class Header extends PureComponent {
  render () {
    return <header className={styles['container']}>React chat room</header>
  }
}

