import React from 'react';
import { Link } from 'react-router-dom';
import { NavContainer, NavInputContainer, NavEventSearchInput, LoginButton } from './navbar.css';
import Logo from './components/NavLogo';

// import Location from '../assets/icons/location.svg';

interface NavProps {
  isInternal: boolean;
  isLogin: boolean;
  isUserAccount: boolean;
}

const Navbar = ({ isInternal, isLogin, isUserAccount }: NavProps) => (
  <NavContainer>
    <Logo/>


    {isInternal && (
      <NavInputContainer>
        <NavEventSearchInput size={25} placeholder="Search for an event"/>
        <NavEventSearchInput size={25} placeholder="Where?"/>
      </NavInputContainer>
    )}

    {isLogin ? (
      <div/>
    ) : (
      !isUserAccount && (
        <Link to="/login">
          <LoginButton primary>Login/Sign Up</LoginButton>
        </Link>
      )
    )}
  </NavContainer>
);

export default Navbar;

