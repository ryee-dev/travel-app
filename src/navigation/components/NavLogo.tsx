import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoPlaceholder from '../../assets/icons/KTA.svg';

const LogoWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;

  a img {
    height: 60px;
    padding: 0 1rem;
    text-decoration: none;
    transition: transform 0.6s ease-in-out;

    &:hover {
      transform: rotate(115deg);
    }

    &:active {
      transform: rotate(360deg);
    }
  }
`;

/*
  This is a separate component to promote extensibility in the future
 */
const Logo = () => (
  <LogoWrapper>
    <Link to="/">
      <img src={LogoPlaceholder} alt="Company Logo" />
    </Link>
  </LogoWrapper>
);

export default Logo;

// the quick brown fox jumped over the lazy dog
