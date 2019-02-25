import styled from 'styled-components';

export const EventsListingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  width: 100%;
  padding: 1rem 0;
`;

export const GridContainer = styled.div`
  display: grid;
  height: 100%;
  align-items: center;
  justify-content: center;
  justify-items: center;
  grid-gap: 4rem 20px;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 33.3%);
`;

export const TrendingEventsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1240px;
`;
