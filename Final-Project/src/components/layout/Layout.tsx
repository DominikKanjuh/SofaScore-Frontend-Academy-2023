import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { createContext } from "react";
import Main from "./Main";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.surface.s0};
`;

interface MobileContextProps {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextProps>({
  isMobile: null,
});

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMobile(!matches);
  }, [matches]);

  return (
    <StyledLayout>
      <MobileContext.Provider value={{ isMobile }}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </MobileContext.Provider>
    </StyledLayout>
  );
}

export const useMobile = () => useContext(MobileContext);
