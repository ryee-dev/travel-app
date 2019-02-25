import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../ui-components';

const EventDetailsPageHeader = () => (
  <HeaderWrapper>
    <h1>LET'S GRAB DRINKS</h1>
    <h3>Dates Available: From March 31-April 24 in [Location]</h3>
    <h3>$45/person</h3>
    <h3>4.5 stars (average rating)</h3>
    <br />
    <Button color="#00bfbc">Register For This Event</Button>
  </HeaderWrapper>
);

export default EventDetailsPageHeader;

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 2rem 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  background-color: #f14c38;
  color: white;
  box-sizing: border-box;

  h2 {
    text-transform: uppercase;
    margin: 0;
  }

  h3 {
    //margin: 10px 0;
    margin: 0 0 8px 0;
  }
`;
