import React from "react";
import styled from "styled-components";
import { useMobile } from "./Layout";

const StyledMainWeb = styled.div`
  width: 100%;
  padding: 0 24px 48px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledMainMobile = styled.div`
  width: 100%;
  padding: 0px 8px 48px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

//add children to the Main component
const Main = ({ children }) => {
  const { isMobile } = useMobile();

  return isMobile ? (
    <StyledMainMobile>{children}</StyledMainMobile>
  ) : (
    <StyledMainWeb>{children}</StyledMainWeb>
  );
};

export default Main;
