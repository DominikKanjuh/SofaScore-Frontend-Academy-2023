import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
import Link from "next/link";

const StyledSportDiv = styled.div`
  height: 100%;
  padding: 0px 8px 0px 8px;
`;

const StyledSport = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 16px 0 16px 0;
  color: ${(props) => props.theme.color.surface.s1};
  border-bottom: ${(props) =>
    props.isSelected && `4px solid ${props.theme.color.surface.s1}`};
  cursor: pointer;
`;

const StyledSportName = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: left;
  color: ${(props) => props.theme.color.surface.s1};
`;

const SportLink = styled(Link)`
  text-decoration: none;
`;

const sports = {
  football: "Football",
  basketball: "Basketball",
  nfl: "American Football",
};

type SportType = keyof typeof sports;

interface TabProps {
  sport: SportType;
  currentSelection: string;
  targetLabel: string;
}

export const Tab: React.FC<TabProps> = ({
  sport,
  currentSelection,
  targetLabel,
}) => {
  return (
    <StyledSportDiv>
      <SportLink href={targetLabel}>
        <StyledSport isSelected={currentSelection == targetLabel}>
          <Icon icon={sport} width={16} />
          <StyledSportName>{sports[sport]}</StyledSportName>
        </StyledSport>
      </SportLink>
    </StyledSportDiv>
  );
};
