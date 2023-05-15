import styled from "styled-components";

const ButtonElement = styled.button`
  background-color: pink;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    background-color: white;
    color: pink;
  }
  width: 5rem;
  height: 2rem;
`;

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonElement onClick={onClick}>{children}</ButtonElement>;
};

export default Button;
