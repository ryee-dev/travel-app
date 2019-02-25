import styled from 'styled-components';

export const EventCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem 1rem 3rem 1rem;
  border: 1px solid #00bfbc;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 450px;
  margin-bottom: 1rem;
`;

export const EventImage = styled.div`
  background-color: white;
  //box-shadow: inset 0 0 10px 1px #FFF;
  //height: 100%;
  width: 100%;
  border-radius: 10px;
  min-height: 300px;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

export const EventLabelWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  //margin-left: 1rem;
 
  h2 {
    text-align: left;
    font-size: 1.25rem;
    color: #345d9c;
    padding: 0.5rem 0 0.25rem 0;
    margin: 0;
  }
  
  h3 {
    color: #767676;
    margin: 0;
    font-size: 1rem;
  }
`;

export const SubLabelWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    transform: scale(0.9);
    padding: 0 0 2px 2px;
  }
`;
