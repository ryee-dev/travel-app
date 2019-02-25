import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;
  border-top: 1px solid #767676;
`;

export const FooterCol = styled.div`
  //margin-right: 3rem;
  margin: 0 3rem 1rem 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  
  h3 {
    color: #345d9c;
    font-weight: bold;
  }
  
  p {
    color: #767676;
    margin: 0 0 0.5rem 0;
  }
`;

export const SocialMediaCol = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  
  img {
    padding: 0 1rem;
  }
`;
