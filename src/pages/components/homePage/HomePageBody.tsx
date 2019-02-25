import React from 'react';
import FeaturedEvents from '../featured-events-grid/FeaturedEvents';
import FeaturedEventsGrid from '../featured-events-grid/FeaturedEventsGrid';
import { HomeBodyWrapper } from './HomePage.css';

const HomePageBody = () => (
    <HomeBodyWrapper>
      <FeaturedEvents title="Trending Experiences" rows={1} />
      <FeaturedEventsGrid />
      <FeaturedEvents title="Top Rated" rows={2} />
    </HomeBodyWrapper>
);

export default HomePageBody;

