import { useState } from "react";
import styled from "styled-components";

const ToggleHelper = styled.div`
  position: relative;
  width: 48px;
  height: 24px;
  border-radius: 24px;
  background-color: #00000040;
  cursor: pointer;
  transition-duration: 300ms;

  & > div {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    position: absolute;
    left: 2px;
    top: 2px;
    background-color: #ffffff;
    transition-duration: 300ms;
  }

  &.on > div {
    background-color: #0011ff;
    left: 26px;
  }
  &.on {
    background-color: #ffffff;
  }
`;

const ToggleButton = ({
  value,
  onChange,
}: {
  value: boolean;
  onChange?: (value: boolean) => void;
}) => {
  const [isToggled, setIsToggled] = useState(value);
  return (
    <>
      <p>Promijeni temu:</p>
      <ToggleHelper
        onClick={() => {
          setIsToggled((isToggled) => !isToggled);
          onChange && onChange(!isToggled);
        }}
        className={isToggled ? "off" : "on"}
      >
        <div></div>
      </ToggleHelper>
    </>
  );
};

export default ToggleButton;
