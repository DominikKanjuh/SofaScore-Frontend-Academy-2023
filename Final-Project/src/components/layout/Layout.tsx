import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import { useMediaQuery } from "usehooks-ts";
import { createContext } from "react";

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

interface MobileContextProps {
  isMobile: boolean;
}

const MobileContext = createContext<MobileContextProps>({
  isMobile: false,
});

export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const matches = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMobile((prevMatches) => !prevMatches);
  }, [matches]);

  return (
    <StyledLayout>
      <MobileContext.Provider value={{ isMobile }}>
        <Header />
        {children}
        <Footer />
      </MobileContext.Provider>
    </StyledLayout>
  );
}

export const useMobile = () => useContext(MobileContext);
