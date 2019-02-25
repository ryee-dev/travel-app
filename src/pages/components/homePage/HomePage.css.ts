import styled from 'styled-components';
import cover from 'polished/lib/mixins/cover';
import BannerImage from '../../../assets/images/earthporn.png';
import { NAV_HEIGHT_PX } from '../../../constants';
import { Input, Button } from '../../../ui-components';

export const HomeHeaderWrapper = styled.div`
  ${cover()};
  box-sizing: border-box;
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${BannerImage}) no-repeat center;
  background-size: cover;
  flex-direction: column;
  height: 70vh;
  min-height: 30vh;
  //max-height: 60vh;
  margin-top: -146px;
  padding: calc(${NAV_HEIGHT_PX}px / 2) 2rem;
  position: relative;

  h2 {
    font-size: 4rem;
    text-align: center;
    margin-top: 0;
  }

  a {
    text-decoration: none;
    background-image: linear-gradient(currentColor, currentColor);
    background-position: 0 100%;
    background-repeat: no-repeat;
    background-size: 0 1px;
    transition: background-size 0.3s ease-in-out;

    &:hover {
      background-size: 100% 1px;
      cursor: pointer;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  ${Input} {
    min-width: 25%;
    margin: 0 0.6rem;
    transition: width 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &::placeholder {
      font-size: 0.8rem;
      opacity: 0.5;
      transition: opacity 0.2s ease-in-out;
    }

    &:focus {
      width: 33.3%;
      outline: none;
      box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.4);

      &::placeholder {
        opacity: 1;
      }
    }
  }

  ${Button} {
    margin-left: 0.5rem;
  }

  a {
    background: none;
    text-decoration: none;
  }
`;

export const HomeBodyWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 0 5rem 0;
  height: 100%;
  width: 100%;
  z-index: 1;

  h1 {
    font-size: 2.4rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
  }

  span {
    max-width: 1240px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const HomeLoginButton = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 4rem;
`;
