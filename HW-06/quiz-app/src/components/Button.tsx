import styled, { css } from "styled-components";

const ButtonElement = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  background-color: pink;
  &:hover {
    background-color: white;
    color: pink;
  }
  width: 80%;
  height: auto;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  ${(props) =>
    props.isSelected &&
    css`
      background-color: purple;
      color: white;

      &:hover {
        background-color: purple;
        color: white;
      }
    `}

  ${(props) =>
    props.isDisabled &&
    css`
      background-color: grey;
      color: white;
      cursor: not-allowed;

      &:hover {
        background-color: grey;
        color: white;
      }
    `}

    ${(props) =>
    props.isFinal &&
    props.isCorrect &&
    css`
      background-color: green;
      color: white;

      &:hover {
        background-color: green;
        color: white;
      }
    `} 


  ${(props) =>
    props.isFinal &&
    props.isSelected &&
    !props.isCorrect &&
    css`
      background-color: red;
      color: white;

      &:hover {
        background-color: red;
        color: white;
      }
    `}
`;

type ButtonProps = {
  onClick: () => void;
  isSelected?: boolean;
  isDisabled?: boolean;
  isCorrect?: boolean;
  isFinal?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  isSelected,
  children,
  isDisabled,
  isCorrect,
  isFinal,
}) => {
  return (
    <ButtonElement
      onClick={onClick}
      isSelected={isSelected}
      isDisabled={isDisabled}
      isCorrect={isCorrect}
      isFinal={isFinal}
    >
      {children}
    </ButtonElement>
  );
};

export default Button;
