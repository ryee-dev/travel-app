import styled from 'styled-components';

interface FeaturedProps {
  large?: boolean;
  medium?: boolean;
  small?: boolean;
  bgColor: string;
}

export const FeaturedGridWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1240px;
`;

export const FeaturedRow = styled.div`
  margin: 1rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FeaturedClass = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  padding: 1rem 2rem;
  border-radius: 10px;
  width: ${(props: FeaturedProps) => 
    (props.large && '100%') ||
    (props.medium && '66.7%') ||
    (props.small && '33.3%')
  };
  
  margin-right: ${(props: FeaturedProps) => props.small ? '20px' : 0 };

  height: ${(props: FeaturedProps) => props.large ? '350px' : '250px' };
  background-color: ${(props:FeaturedProps) => props.bgColor };
  opacity: 0.5;
  
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  
  &:hover {
    width: 100%;
    cursor: pointer;
    opacity: 1;
    //height: ${(props: FeaturedProps) => props.large && '500px'};
  }
  
  h2 {
    font-weight: bold;
    color: white;
    margin: 0;
  }
`;
