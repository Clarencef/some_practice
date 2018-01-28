import React, { PureComponent } from 'react';
import styles from './side-bar.scss';

export default class SideBar extends PureComponent {
  render () {
    return (
      <aside className={styles['container']}>
        aSide
      </aside>
    );
  }
}