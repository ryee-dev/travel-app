import React from 'react';
import styled from 'styled-components';

const EventDetailsPageBody = () => (
  <Container>
    <LeftCol>
      <p>test</p>
    </LeftCol>
    <RightCol>
      <p>test</p>
    </RightCol>
  </Container>
);

export default EventDetailsPageBody;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LeftCol = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  margin-right: 10%;

  border: 1px dotted black;
`;

const RightCol = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  border: 1px dotted black;
`;
