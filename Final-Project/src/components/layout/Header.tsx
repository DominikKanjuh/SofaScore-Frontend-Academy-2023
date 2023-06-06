import React, { useState, useContext } from "react";
import Icon from "../icon/Icon";
import styled from "styled-components";
import ThemeContext, { useTheming } from "@/contexts/ThemeContext";
import ToggleButton from "../buttons/ToggleButton";
import { dark, light } from "@/components/theme/Theme";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: ${(props) => props.theme.color.primary.default};
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const HiddenIcon = styled.div`
  visibility: hidden;
`;

const PaddingOnSettings = styled.div`
  padding-right: 24px;
  position: relative;
`;

const SettingsButton = styled.button`
  background-color: ${(props) => props.theme.color.primary.default};
  height: 24px;
  width: 24px;
  border: none;
  cursor: pointer;
`;

const Popup = styled.div<{ show: boolean }>`
  position: absolute;
  z-index: 1;
  top: 160%;
  right: 0;
  left: auto;
  width: 200px;
  background-color: ${(props) => props.theme.color.primary.default};
  padding: 16px;
  display: ${(props) => (props.show ? "block" : "none")};
  border-radius: 0 0 0 16px;
`;

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { currentTheme, toggleTheme, setCurrentTheme } = useTheming();
  const togglePopup = () => {
    setIsSettingsOpen((isSettingsOpen) => !isSettingsOpen);
  };

  return (
    <StyledHeader>
      <FirstRow>
        <HiddenIcon>
          <Icon icon="settings" />
        </HiddenIcon>
        <Icon icon="sofascore" width={132} />
        <PaddingOnSettings>
          <SettingsButton onClick={togglePopup}>
            <Icon icon="settings" />
          </SettingsButton>
          <Popup show={isSettingsOpen}>
            <ToggleButton
              value={true}
              onChange={(e) => {
                if (e) {
                  setCurrentTheme(light);
                } else {
                  setCurrentTheme(dark);
                }
              }}
            />
          </Popup>
        </PaddingOnSettings>
      </FirstRow>
    </StyledHeader>
  );
};

export default Header;
