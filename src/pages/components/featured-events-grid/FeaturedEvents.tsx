import React from 'react';
import EventGroup from '../events-listing/EventGroup';
import styled from 'styled-components';

interface Props {
  rows: number;
  title?: string;
}

const FeaturedEvents = (props: Props) => (
  <FeaturedEventsContainer>
    <h1>{props.title}</h1>
    <span>
      <a>See all...</a>
    </span>

    {props.rows === 1 && (
      <EventGroup
        eventListings={[
          {
            title: 'Surfing Lessons',
            location: 'Hawaii',
            price: 45,
            rating: 4.5
          },
          {
            title: 'Scuba Diving',
            location: 'Bahamas',
            price: 65,
            rating: 4.7
          },
          {
            title: 'Wine Tasting',
            location: 'Seattle',
            price: 15,
            rating: 4.4
          }
        ]}
      />
    )}

    {props.rows === 2 && (
      <EventGroup
        eventListings={[
          {
            title: 'Surfing Lessons',
            location: 'Hawaii',
            price: 45,
            rating: 4.5
          },
          {
            title: 'Scuba Diving',
            location: 'Bahamas',
            price: 65,
            rating: 4.7
          },
          {
            title: 'Wine Tasting',
            location: 'Seattle',
            price: 15,
            rating: 4.4
          },
          {
            title: 'Jogging',
            location: 'Portland',
            price: 0,
            rating: 4.6
          },
          {
            title: 'Sleeping',
            location: 'Clouds',
            price: 0,
            rating: 5
          },
          {
            title: 'Working Out',
            location: 'Gym',
            price: 35,
            rating: 2.5
          }
        ]}
      />
    )}

    {props.rows === 3 && (
      <EventGroup
      eventListings={[
      {
        title: 'Surfing Lessons',
        location: 'Hawaii',
        price: 45,
        rating: 4.5
      },
      {
        title: 'Scuba Diving',
        location: 'Bahamas',
        price: 65,
        rating: 4.7
      },
      {
        title: 'Wine Tasting',
        location: 'Seattle',
        price: 15,
        rating: 4.4
      },
      {
        title: 'Jogging',
        location: 'Portland',
        price: 0,
        rating: 4.6
      },
      {
        title: 'Sleeping',
        location: 'Clouds',
        price: 0,
        rating: 5
      },
      {
        title: 'Working Out',
        location: 'Gym',
        price: 35,
        rating: 2.5
      },
      {
        title: 'Surfing Lessons',
        location: 'Hawaii',
        price: 45,
        rating: 4.5
      },
      {
        title: 'Scuba Diving',
        location: 'Bahamas',
        price: 65,
        rating: 4.7
      },
      {
        title: 'Wine Tasting',
        location: 'Seattle',
        price: 15,
        rating: 4.4
      },
    ]}
      />
    )}
  </FeaturedEventsContainer>
);

export default FeaturedEvents;

const FeaturedEventsContainer = styled.div`
  max-width: 1240px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  span {
    width: 100%;
    text-align: right;
  }
`;
