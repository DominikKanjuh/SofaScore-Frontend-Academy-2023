import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheming } from "@/contexts/ThemeContext";
import { dark, light } from "@/components/theme/Theme";

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

const ThemeToggle = ({ onChange }: { onChange?: (value: boolean) => void }) => {
  const [isToggled, setIsToggled] = useState(false);
  const { setCurrentTheme } = useTheming();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsToggled(storedTheme === "dark");
  }, []);

  const onChangeToggle = () => {
    onChange && toggleTheme();
  };

  const toggleTheme = () => {
    const newTheme = localStorage.getItem("theme") === "dark" ? light : dark;
    const newThemeString =
      localStorage.getItem("theme") === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newThemeString);
    setIsToggled((isToggled) => !isToggled);
  };

  return (
    <ThemeToggleDiv>
      <ThemeToggleP>Theme</ThemeToggleP>
      <ToggleHelper
        onClick={onChangeToggle}
        className={isToggled ? "on" : "off"}
      >
        <div></div>
      </ToggleHelper>
    </ThemeToggleDiv>
  );
};

export default ThemeToggle;
