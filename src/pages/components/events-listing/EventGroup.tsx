import React from 'react';
import EventListing from './event-listing/EventListing';
import {
  EventsListingContainer,
  TrendingEventsWrapper
} from './EventsGroup.css';

interface EventGroupProps {
  eventListings: Array<{
    title: string;
    location: string;
    price: number;
    rating: number;
  }>;
}

const EventGroup = (props: EventGroupProps) => (
  <EventsListingContainer>
    <TrendingEventsWrapper>
      {props.eventListings.map(event => (
        <EventListing
          title={event.title}
          location={event.location}
          price={event.price}
          rating={event.rating}
        />
      ))}
    </TrendingEventsWrapper>
  </EventsListingContainer>
);

export default EventGroup;
