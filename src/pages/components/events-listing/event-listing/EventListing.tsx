import React from 'react';
import { Link } from 'react-router-dom';
import EventCardFavoriteIcon from './EventCardFavoriteIcon';
import {
  EventCardContainer,
  EventImage,
  EventLabelWrapper,
  SubLabelWrapper,
  RatingContainer
} from './EventListing.css';
import Star from './assets/star.svg';

interface EventCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
}

class EventListing extends React.Component<EventCardProps> {
  constructor(props: EventCardProps) {
    super(props);
  }

  public render() {
    const { title, location, price, rating } = this.props;
    return (
      <EventCardContainer>
        <Link to="/event-details">
          <EventImage>
            <EventCardFavoriteIcon favorite={true} />
          </EventImage>
        </Link>
        <EventLabelWrapper>
          <h2>
            {title} | {location}
          </h2>
          <SubLabelWrapper>
            <h3>${price}/person</h3>
            <RatingContainer>
              <h3>{rating}</h3>
              <img src={Star} alt="star" />
            </RatingContainer>
          </SubLabelWrapper>
        </EventLabelWrapper>
      </EventCardContainer>
    );
  }
}

export default EventListing;
