import React, { useState, useContext, useEffect } from "react";
import Icon from "../icon/Icon";
import styled from "styled-components";
import ThemeContext, { useTheming } from "@/contexts/ThemeContext";
import ToggleButton from "../buttons/ToggleButton";
import { dark, light } from "@/components/theme/Theme";
import { TabWeb } from "../tabs/TabWeb";
import ThemeToggle from "../buttons/ToggleButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { log } from "console";
import { useMobile } from "./Layout";
import { TabMobile } from "../tabs/TabMobile";

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

const StyledSofascoreLogoWeb = styled.div`
  height: 64px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > * {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const StyledSofascoreLogoMobile = styled.div`
  height: 48px;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & > * {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const HiddenIconWeb = styled.div`
  height: 64px;
  width: 64px;
  visibility: hidden;
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
  height: 64px;
  width: 64px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Popup = styled.div<{ show: boolean }>`
  position: absolute;
  z-index: 1;
  top: 170%;
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
  padding: 14px 0px 14px 16px;
`;

const MobileButtonsRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 96px;
  margin-right: 4px;

  & > * {
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

const SecondRowMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  background-color: ${(props) => props.theme.color.primary.default};
`;

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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
        <StyledSofascoreLogoMobile>
          <Link href="/">
            <Icon icon="sofascore" width={132} />
          </Link>
        </StyledSofascoreLogoMobile>
        <MobileButtonsRight>
          <Link href={"/league"}>
            <Icon icon="trophy" />
          </Link>
          <Link href={"/settings"}>
            <Icon icon="settings" />
          </Link>
        </MobileButtonsRight>
      </FirstRowMobile>
      <SecondRowMobile>
        <TabMobile
          sport="football"
          currentSelection={selectedLabel}
          targetLabel={"/"}
        />
        <TabMobile
          sport="basketball"
          currentSelection={selectedLabel}
          targetLabel={"/basketball"}
        />
        <TabMobile
          sport="nfl"
          currentSelection={selectedLabel}
          targetLabel={"/american-football"}
        />
      </SecondRowMobile>
    </StyledHeader>
  ) : (
    <StyledHeader>
      <FirstRowWeb>
        <HiddenIconWeb>
          <Icon icon="settings" />
        </HiddenIconWeb>
        <StyledSofascoreLogoWeb>
          <Link href="/">
            <Icon icon="sofascore" width={132} />
          </Link>
        </StyledSofascoreLogoWeb>
        <SettingsButton onClick={togglePopup}>
          <Icon icon="settings" />
          <Popup show={isSettingsOpen}>
            <ThemeToggle onChange={(e) => {}} />
          </Popup>
        </SettingsButton>
      </FirstRowWeb>
      <SecondRowWeb>
        <TabWeb
          sport="football"
          currentSelection={selectedLabel}
          targetLabel={"/"}
        />
        <TabWeb
          sport="basketball"
          currentSelection={selectedLabel}
          targetLabel={"/basketball"}
        />
        <TabWeb
          sport="nfl"
          currentSelection={selectedLabel}
          targetLabel={"/american-football"}
        />
      </SecondRowWeb>
    </StyledHeader>
  );
};

export default Header;
