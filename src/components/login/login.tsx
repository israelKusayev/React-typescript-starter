import React, { Component } from 'react';
import styles from './login.module.scss';

interface LoginProps {}
interface LoginState {}

export default class Login extends Component<LoginProps, LoginState> {
  render() {
    return (
      <div>
        Login
        <input className={styles.input + ' has-error'} type='text' />
      </div>
    );
  }
}
