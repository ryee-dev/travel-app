import styled from 'styled-components';

export interface InputProps {
  size: number;
  dropshadow?: boolean;
}

const BaseInput = styled.input`
  border: none;
  border-radius: 10px;
  background-color: #f4f8ff;
  padding: 1rem;
  margin: 0 0.4rem;

  &::placeholder {
    font-size: 0.8rem;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }

  &:focus {
    outline: none;

    &::placeholder {
      opacity: 1;
    }
  }
`;

const Input = styled(BaseInput)`
  width: ${(props: InputProps) => `${props.size}%`};
  box-shadow: ${(props: InputProps) =>
    props.dropshadow
      ? 'box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25)'
      : 'box-shadow: none'};
`;

export default Input;
