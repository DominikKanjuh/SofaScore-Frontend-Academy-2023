import React, { useState, useContext, useEffect } from "react";
import Icon from "../icon/Icon";
import styled from "styled-components";
import ThemeContext, { useTheming } from "@/contexts/ThemeContext";
import ToggleButton from "../buttons/ToggleButton";
import { dark, light } from "@/components/theme/Theme";
import { Tab } from "../tabs/Tab";
import ThemeToggle from "../buttons/ToggleButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { log } from "console";
import { useMobile } from "./Layout";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.color.primary.default};
`;

const FirstRowWeb = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 22px 0 22px 0;
`;

const HiddenIconWeb = styled.div`
  visibility: hidden;
`;

const PaddingOnSettingsWeb = styled.div`
  height: 24px;
  padding-right: 24px;
  position: relative;
`;

const SecondRowWeb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  background-color: ${(props) => props.theme.color.primary.default};
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
  top: 380%;
  right: 0;
  left: auto;
  width: 200px;
  background-color: ${(props) => props.theme.color.primary.default};
  padding: 16px;
  display: ${(props) => (props.show ? "block" : "none")};
  border-radius: 0 0 0 16px;
`;

const FirstRowMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 14px 16px 14px 16px;
`;

const MobileButtonsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 24px;
`;

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { setCurrentTheme } = useTheming();
  const togglePopup = () => {
    setIsSettingsOpen((isSettingsOpen) => !isSettingsOpen);
  };

  const [selectedLabel, setSelectedLabel] = useState("");

  const router = useRouter();
  useEffect(() => {
    let route = router.asPath.split("/")[1];
    route = "/" + route;
    setSelectedLabel(route);
  }, [router]);

  const { isMobile } = useMobile();

  return isMobile ? (
    <StyledHeader>
      <FirstRowMobile>
        <Link href="/">
          <Icon icon="sofascore" width={132} />
        </Link>
        <MobileButtonsRight>
          <Icon icon="trophy" />
          <SettingsButton onClick={togglePopup}>
            <Icon icon="settings" />
          </SettingsButton>
          <Popup show={isSettingsOpen}>
            <ThemeToggle
              // value={true}
              onChange={(e) => {
                if (e) {
                  setCurrentTheme(light);
                  typeof window !== "undefined" &&
                    localStorage.setItem("theme", "light");
                } else {
                  setCurrentTheme(dark);
                  typeof window !== "undefined" &&
                    localStorage.setItem("theme", "dark");
                }
              }}
            />
          </Popup>
        </MobileButtonsRight>
      </FirstRowMobile>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <FirstRowWeb>
        <HiddenIconWeb>
          <Icon icon="settings" />
        </HiddenIconWeb>
        <Link href="/">
          <Icon icon="sofascore" width={132} />
        </Link>
        <PaddingOnSettingsWeb>
          <SettingsButton onClick={togglePopup}>
            <Icon icon="settings" />
          </SettingsButton>
          <Popup show={isSettingsOpen}>
            <ThemeToggle
              // value={true}
              onChange={(e) => {
                if (e) {
                  setCurrentTheme(light);
                } else {
                  setCurrentTheme(dark);
                }
              }}
            />
          </Popup>
        </PaddingOnSettingsWeb>
      </FirstRowWeb>
      <SecondRowWeb>
        <Tab
          sport="football"
          currentSelection={selectedLabel}
          targetLabel={"/"}
        />
        <Tab
          sport="basketball"
          currentSelection={selectedLabel}
          targetLabel={"/basketball"}
        />
        <Tab
          sport="nfl"
          currentSelection={selectedLabel}
          targetLabel={"/american-football"}
        />
      </SecondRowWeb>
    </StyledHeader>
  );
};

export default Header;
