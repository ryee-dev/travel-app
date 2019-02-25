import React from 'react';
import styled from 'styled-components';
import { Input } from '../../../ui-components';
import { ReactComponent as CircleSVG } from './CircleIcon.svg';
import DropdownIcon from './DropdownIcon.svg';

const SearchFilter = () => (
  <FilterWrapper>
    <FitlerInput placeholder="Price (Low)" size={5} dropshadow={true} />
    <FitlerInput placeholder="Price (High)" size={5} />
    <FitlerInput placeholder="Closest to:" size={33.3} />
    <FilterDropdown placeholder="Date">
      <option selected disabled>
        Date
      </option>
    </FilterDropdown>
    {/*<img src={CircleSVG} alt="circle" />*/}
    <CircleSVG />
  </FilterWrapper>
);

export default SearchFilter;

const FilterWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 2rem 0;

  img {
    margin-left: 1rem;
  }

  svg {
    margin-left: 1rem;
    transition: transform 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }
`;

const FitlerInput = styled(Input)`
  //border: 1px solid black;
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.4);
  //margin: 0 0.5rem;
`;

const FilterDropdown = styled.select`
  background-color: #f4f8ff;
  box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.4);
  width: 10%;
  border-radius: 10px;
  border: none;
  appearance: none;
  background-image: url(${DropdownIcon});
  background-position: right;
  background-repeat: no-repeat;
  background-size: 30px;
  background-origin: content-box;
  padding: 1rem;
  font-family: Nunito, sans-serif;

  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.4);

  &:focus {
    outline: none;
  }
`;
