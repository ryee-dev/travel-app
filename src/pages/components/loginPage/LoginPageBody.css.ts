import styled from 'styled-components';
import { Input } from '../../../ui-components';

export const LoginBodyWrapper = styled.div`
  box-sizing: border-box;
  //max-width: 1240px;
  //width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 5rem;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  width: 80%;
`;

export const LoginBodyCol = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  button {
    font-size: 1.2rem;
    padding: 0.8rem 2rem 0.8rem 1.4rem;
    display: flex;
    align-items: center;
    margin: 0 0 1rem 0;

    img {
      justify-self: flex-start;
      height: 40px;
      padding-right: 1rem;
    }

    span {
      justify-self: center;
    }
  }
`;

export const LoginInput = styled(Input)`
  box-shadow: inset 0 0 1px 0 rgba(0, 0, 0, 0.3);
  margin-left: 0;
  //margin: 1rem 0 1rem 0;

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
