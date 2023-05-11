"use client";
import styled from "styled-components";
import Icon, { IconName } from "./Icon";
import Link from "next/link";

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  gap: 0.25rem;
`;

const SidebarItem = ({
  href,
  icon,
  title,
}: {
  href: string;
  icon: IconName;
  title: string;
}) => {
  return (
    <>
      <Link href={href}>
        <SidebarDiv>
          <Icon icon={icon} size={16} />
          <p>{title}</p>
        </SidebarDiv>
      </Link>
    </>
  );
};

const SidebarUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 10%;
  height: 100%;
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  border-right: 2px solid black;
`;

function Sidebar() {
  return (
    <>
      <SidebarUl>
        <SidebarItem href="/" icon="home" title="Homepage" />
        <SidebarItem href="/quiz" icon="quiz" title="Quiz" />
        <SidebarItem href="/learn" icon="learn" title="Learn" />
        <SidebarItem
          href="/leaderboard"
          icon="leaderboard"
          title="Leaderboard"
        />
      </SidebarUl>
    </>
  );
}

export default Sidebar;
