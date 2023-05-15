import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

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
      {children}
    </LayoutDiv>
  );
};

export default Layout;
