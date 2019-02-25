import styled from 'styled-components';
import { cover } from 'polished';

// import constant
export const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
`;

export const HeaderWrapper = styled.header`
  ${cover()};
  box-sizing: border-box;
  color: white;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  h2 {
    font-size: 3rem;
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const BodyWrapper = styled.main`
  position: relative;
  height: 100%;
  //min-height: 100vh;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;
