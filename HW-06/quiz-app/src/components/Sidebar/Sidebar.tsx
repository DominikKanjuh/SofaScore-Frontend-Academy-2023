import React, { useState } from "react";
import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";

const SidebarUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: fit-content;
  height: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: width 0.3s ease;
`;

const Sidebar = () => {
  const [showText, setShowText] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };
  return (
    <SidebarUl onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SidebarItem href="/" icon="home" title="Homepage" showText={showText} />
      <SidebarItem href="/quiz" icon="quiz" title="Quiz" showText={showText} />
      <SidebarItem
        href="/learn"
        icon="learn"
        title="Learn"
        showText={showText}
      />
      <SidebarItem
        href="/leaderboard"
        icon="leaderboard"
        title="Leaderboard"
        showText={showText}
      />
    </SidebarUl>
  );
};

export default Sidebar;
