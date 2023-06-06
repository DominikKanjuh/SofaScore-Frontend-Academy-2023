import React from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";

const StyledSportDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0px 8px 0px 8px;
`;

const StyledSport = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 16px 0 16px 0;
  color: ${(props) => props.theme.color.surface.s1};
  border-bottom: 2px solid ${(props) => props.theme.color.surface.s1};
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

const sports = {
  football: "Football",
  basketball: "Basketball",
  nfl: "American Football",
};

type SportType = keyof typeof sports;

interface TabProps {
  sport: SportType;
}

export const Tab: React.FC<TabProps> = ({ sport }) => {
  return (
    <StyledSportDiv>
      <StyledSport>
        <Icon icon={sport} width={16} />
        <StyledSportName>{sports[sport]}</StyledSportName>
      </StyledSport>
    </StyledSportDiv>
  );
};
