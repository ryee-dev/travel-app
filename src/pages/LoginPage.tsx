import React from 'react';
import SiteHeader from '../pages/components/header/SiteHeader';
import LoginPageBody from './components/loginPage/LoginPageBody';

const LoginPage = () => {
  return (
    <div>
      <SiteHeader mainText="Login or Sign Up" subText="Thanks for joining us!" bgColor="orange" showPanel={false}/>
      <LoginPageBody/>
    </div>
  );
};

export default LoginPage;
