import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
import Link from "next/link";

const StyledSportDiv = styled.div`
  display: flex;
  height: 100%;
  width: 33%;
  padding: 0px 8px 0px 8px;
`;

const StyledSport = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 4px 0 8px 0;
  cursor: pointer;
  gap: 4px;
  color: ${(props) => props.theme.color.surface.s2};
  color: ${(props) => props.isSelected && props.theme.color.surface.s1};
  border-bottom: ${(props) =>
    props.isSelected && `4px solid ${props.theme.color.surface.s1}`};
  padding: ${(props) => props.isSelected && `4px 0 4px 0`};

  & > img {
    background-color: ${(props) => props.theme.color.surface.s2};
    background-color: ${(props) =>
      props.isSelected && props.theme.color.surface.s1};
  }
`;

const StyledSportName = styled.p`
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  color: inherit;
`;

const SportLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

const sports = {
  football: "Football",
  basketball: "Basketball",
  nfl: "Am. Football",
};

type SportType = keyof typeof sports;

interface TabProps {
  sport: SportType;
  currentSelection: string;
  targetLabel: string;
}

export const TabMobile: React.FC<TabProps> = ({
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
