import React from 'react';
import styled from 'styled-components';
import FeaturedEvents from '../featured-events-grid/FeaturedEvents';
import SearchFilter from './SearchFilter';

const RefinedSearchPageBody = () => (
  <>
    <FeaturedEventsWrapper>
      <SearchFilter />
      <FeaturedEvents title="Trending Experiences" rows={1} />
    </FeaturedEventsWrapper>
  </>
);

export default RefinedSearchPageBody;

const FeaturedEventsWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
