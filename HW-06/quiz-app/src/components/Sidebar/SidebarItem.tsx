import styled from "styled-components";
import { Link } from "react-router-dom";
import Icon, { IconName } from "./Icon";

const SidebarLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

const SidebarButton = styled.button`
  width: 100%;
  background-color: pink;
  border: none;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: white;
    color: pink;
  }
`;

const SidebarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const SidebarItem = ({
  href,
  icon,
  title,
  showText,
}: {
  href: string;
  icon: IconName;
  title: string;
  showText?: boolean;
}) => {
  return (
    <>
      <SidebarLink to={href}>
        <SidebarButton>
          <SidebarDiv>
            <Icon icon={icon} />
            {showText && <p>{title}</p>}
          </SidebarDiv>
        </SidebarButton>
      </SidebarLink>
    </>
  );
};
