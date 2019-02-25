import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PanelItem from './PanelItem';

const TopClassesPanel = () => (
  <PanelContainer>
    <Link to="/search">
      <PanelItem />
    </Link>
    <Link to="/search">
      <PanelItem />
    </Link>
    <Link to="/search">
      <PanelItem />
    </Link>
    <Link to="/search">
      <PanelItem />
    </Link>
    <Link to="/search">
      <PanelItem />
    </Link>
  </PanelContainer>
);

const PanelContainer = styled.div`
  position: absolute;
  bottom: -5rem;
  padding: 2rem 2rem 0.5rem 2rem;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  z-index: 2;
  //min-width: 80%;

  a {
    text-decoration: none;
    background: none !important;
    cursor: default !important;
  }
`;

export default TopClassesPanel;
