import React from "react";
import styled from "styled-components";
import { SidebarItem } from "./SidebarItem";

const SidebarUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 10%;
  height: 100%;
  background-color: pink;
  border-right: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Sidebar = () => {
  return (
    <SidebarUl>
      <SidebarItem href="/" icon="home" title="Homepage" />
      <SidebarItem href="/quiz" icon="quiz" title="Quiz" />
      <SidebarItem href="/learn" icon="learn" title="Learn" />
      <SidebarItem href="/leaderboard" icon="leaderboard" title="Leaderboard" />
    </SidebarUl>
  );
};

export default Sidebar;
