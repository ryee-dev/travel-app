import * as React from 'react';
import styled from 'styled-components';

const PanelItem = () => (
  <PanelItemContainer>
    <span />
    <p>class</p>
  </PanelItemContainer>
);

const PanelItemContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 2rem;
  transition: transform 0.2s ease-in-out;
  z-index: 2;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  span {
    height: 4rem;
    width: 4rem;
    border-radius: 100px;
    border: #00bfbc 2px solid;
    position: relative;

    //&:hover {
    //  cursor: pointer;
    //}
  }

  p {
    color: black;
  }
`;

export default PanelItem;

//
