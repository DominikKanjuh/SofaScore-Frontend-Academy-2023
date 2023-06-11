import React from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
import { useTheming } from "@/contexts/ThemeContext";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin: 48px 0 0;
  padding: 24px 24px 32px;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 116px;
  background-color: ${(props) => props.theme.color.surface.s1};
  margin-top: auto;
`;

const RightsReserved = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  width: 312px;
  size: 12px;
  color: ${(props) => props.theme.color.onSurface.lv2};
`;

const Footer = () => {
  const { currentTheme } = useTheming();

  return (
    <StyledFooter>
      <Icon
        icon="sofascore"
        width={132}
        color={currentTheme.color.onSurface.lv1}
      />
      <RightsReserved>© 2023 Sofascore – All Rights Reserved.</RightsReserved>
    </StyledFooter>
  );
};

export default Footer;
