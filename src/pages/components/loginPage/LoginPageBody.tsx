import React from 'react';
import {
  LoginBodyWrapper,
  LoginBodyCol,
  LoginInput,
  LoginContainer
} from './LoginPageBody.css';
import { Button } from '../../../ui-components';
import FbIcon from './fb-icon.svg';
import GoogleIcon from './google-icon.svg';
import EmailIcon from './email-icon.svg';

const LoginPageBody = () => (
  <LoginBodyWrapper>
    <h1 style={{ textAlign: 'center' }}>Login Page</h1>
    <LoginContainer>
      <LoginBodyCol>
        <h2>Welcome back!</h2>
        <LoginInput size={75} placeholder="Email" />
        <br />
        <LoginInput size={75} placeholder="Password" />
        <p>-OR-</p>
        <Button color="#d74a3e">
          <img src={GoogleIcon} alt="google" />
          <span>Google</span>
        </Button>
        <Button color="#4167B1">
          <img src={FbIcon} alt="facebook" />
          <span>Facebook</span>
        </Button>
      </LoginBodyCol>
      <LoginBodyCol>
        <h2>Join us!</h2>
        <Button color="#d74a3e">
          <img src={GoogleIcon} alt="google" />
          <span>Sign up with Google</span>
        </Button>
        <Button color="#4167B1">
          <img src={FbIcon} alt="facebook" />
          <span>Sign up with Facebook</span>
        </Button>
        <Button color="#00bfbc">
          <img src={EmailIcon} alt="email" />
          <span>Sign up with your email</span>
        </Button>
      </LoginBodyCol>
    </LoginContainer>
  </LoginBodyWrapper>
);

export default LoginPageBody;
