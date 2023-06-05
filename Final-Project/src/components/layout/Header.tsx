import React from "react";
import Icon from "../icon/Icon";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const HiddenIcon = styled.div`
  visibility: hidden;
`;

const PaddingOnSettings = styled.div`
  padding-right: 24px;
`;

const Header = () => {
  return (
    <StyledHeader>
      <FirstRow>
        <HiddenIcon>
          <Icon icon="settings" color="black" />
        </HiddenIcon>
        <Icon icon="sofascore" color="black" width={132} />
        <PaddingOnSettings>
          <Icon icon="settings" color="black" />
        </PaddingOnSettings>
      </FirstRow>
    </StyledHeader>
  );
};

export default Header;
