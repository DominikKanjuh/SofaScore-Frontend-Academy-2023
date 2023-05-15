import React, { ReactNode } from "react";
import Sidebar from "./sidebar/Sidebar";
import styled from "styled-components";
import Main from "./Main";

const LayoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutDiv>
      <Sidebar />
      <Main> {children}</Main>
    </LayoutDiv>
  );
};

export default Layout;
