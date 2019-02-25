import styled from 'styled-components';
// import { MARGIN_SM_PX } from '../../../../../constants';

export const FavoriteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 10rem;
`;

export const HeartIcon = styled.img`
  margin: 15px;
  height: 25px;
  transition: transform 0.2s ease-in-out, fill 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }

  &:active {
    transform: scale(1);
  }
`;
