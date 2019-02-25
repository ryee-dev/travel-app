import React from 'react';
import {
  HomeHeaderWrapper,
  SearchContainer,
  HomeLoginButton
} from './HomePage.css';
import { Link } from 'react-router-dom';
import { Input, Button } from '../../../ui-components';
import ClassPanel from '../class-panel/ClassPanel';

const HomePageHeader = () => (
  <HomeHeaderWrapper>
    <h2>Travel. Meet. Connect.</h2>
    <Link to="/login">
      <HomeLoginButton primary>Login/Sign-Up</HomeLoginButton>
    </Link>
    <SearchContainer>
      <Input placeholder="your next adventure" size={25} />
      <Input placeholder="location" size={25} />
      <Link to="/refined-search">
        <Button color="#f14c38">Search</Button>
      </Link>
    </SearchContainer>
    <ClassPanel />
  </HomeHeaderWrapper>
);

export default HomePageHeader;
