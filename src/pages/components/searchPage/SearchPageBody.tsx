import React from 'react';
import styled from 'styled-components';
import FeaturedEvents from '../featured-events-grid/FeaturedEvents';

const SearchPageBody = () => (
  <>
    <FeaturedEventsWrapper>
      <FeaturedEvents title="Trending Experiences" rows={1} />
    </FeaturedEventsWrapper>
  </>
);

export default SearchPageBody;

const FeaturedEventsWrapper = styled.div`
  width: 100%;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
