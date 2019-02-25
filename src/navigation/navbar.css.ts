import styled from 'styled-components';
import { Input, Button } from '../ui-components';

export const NavContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const NavEventSearchInput = styled(Input)`
  margin: 1rem;
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.3);
  outline: none;
  font-size: 0.8rem;
  transition: box-shadow 0.3s ease-in-out;

  ::placeholder {
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
  }

  :focus {
    box-shadow: inset 0 0 3px 0 rgba(0, 0, 0, 0.4);

    ::placeholder {
      opacity: 0.4;
    }
  }
`;

export const LocationIcon = styled.img`
  position: absolute;
  right: 0;
`;

export const LoginButton = styled(Button)`
  //justify-self: flex-end;
  background-color: #00bfbc;
  margin-right: 2rem;
  transition: background-color 0.2s ease-in, transform 0.2s ease-in;

  &:hover {
    background-color: orangered;
    transform: scale(1.05);
  }
`;
