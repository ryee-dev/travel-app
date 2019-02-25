import styled from 'styled-components';

export interface ButtonProps {
  disabled?: boolean;
  mobile?: boolean;
  color?: string;
  primary?: boolean;
}

const BaseButton = styled.button`
  color: white;
  white-space: nowrap;
  border-radius: 10px;
  border: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3);
  font-weight: normal;
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out;
  //transition: padding 0.3s ease-in-out;
  margin: 1rem 0;
`;

const Button = styled(BaseButton)`
  font-size: ${(props: ButtonProps) => (props.mobile ? '0.6rem' : '0.8rem')};
  padding: ${(props: ButtonProps) => (props.mobile ? '1rem' : '1rem')};
  margin: ${(props: ButtonProps) => props.mobile && '0.5rem 0'};
  background: ${(props: ButtonProps) =>
    props.color || (props.primary && '#f14c38') || props.color};
  };

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
    transform: scale(${(props: ButtonProps) => (props.mobile ? 0 : 1.05)});
  }
`;

/*
Navbar
  - LoginButton

HomePageHeader
  - SearchButton

EventDetailsPage
  - EventRegistrationButton
  - FavoriteButton
  - SeeMoreButton

SlideOutMenu
  - MyAccountButton

LoginPage
  - GoogleButton
  - FacebookButton
  - EmailButton
 */

export default Button;
