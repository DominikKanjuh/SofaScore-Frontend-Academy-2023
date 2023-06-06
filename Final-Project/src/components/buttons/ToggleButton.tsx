import { useState } from "react";
import styled from "styled-components";

const ToggleHelper = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 24px;
  background-color: ${(props) => props.theme.color.primary.variant};
  cursor: pointer;
  transition-duration: 300ms;

  & > div {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    position: absolute;
    left: 2px;
    top: 2px;
    background-color: ${(props) => props.theme.color.surface.s1};
    transition-duration: 300ms;
  }

  &.on > div {
    left: 26px;
  }
`;

const ThemeToggleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background-color: ${(props) => props.theme.color.primary.default};
`;

const ThemeToggleP = styled.p`
  color: ${(props) => props.theme.color.surface.s1};
  font-size: 16px;
  font-weight: 500;
  margin-left: 24px;
`;

const ThemeToggle = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange?: (value: boolean) => void;
}) => {
  const [isToggled, setIsToggled] = useState(value);
  return (
    <ThemeToggleDiv>
      <ThemeToggleP>Theme</ThemeToggleP>
      <ToggleHelper
        onClick={() => {
          setIsToggled((isToggled) => !isToggled);
          onChange && onChange(!isToggled);
        }}
        className={isToggled ? "off" : "on"}
      >
        <div></div>
      </ToggleHelper>
    </ThemeToggleDiv>
  );
};

export default ThemeToggle;
