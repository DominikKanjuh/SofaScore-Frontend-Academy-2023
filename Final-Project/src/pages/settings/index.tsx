import React from "react";
import styled from "styled-components";

const SettingsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Headline = styled.h1`
  height: 28px;
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.color.onSurface.lv1};
`;

const SettingsMobile = () => {
  return (
    <SettingsDiv>
      <Headline>Settings</Headline>
    </SettingsDiv>
  );
};

export default SettingsMobile;
