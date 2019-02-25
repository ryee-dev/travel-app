import React from 'react';
// @ts-ignore
import { Heart, ActiveHeart } from './assets/icons';
import { FavoriteWrapper, HeartIcon } from './EventCardFavoriteIcon.css';

interface IconProps {
  favorite: boolean;
}

interface IconState {
  isFavorited: boolean;
}

class EventCardFavoriteIcon extends React.Component<IconProps, IconState> {
  constructor(props: Readonly<IconProps>) {
    super(props);

    this.state = {
      isFavorited: false,
    };

    this.handleToggleFavorited = this.handleToggleFavorited.bind(this);
  }

  handleToggleFavorited = () => {
    const { isFavorited } = this.state;

    this.setState({
      isFavorited: !isFavorited,
    });
  };

  render() {
    const { isFavorited } = this.state;

    return (
      <FavoriteWrapper>
        <HeartIcon
          onClick={this.handleToggleFavorited}
          src={isFavorited ? ActiveHeart : Heart}
          style={{ fill: isFavorited ? '#ea5455' : '#fff' }}
        />
      </FavoriteWrapper>
    );
  }
}

export default EventCardFavoriteIcon;
