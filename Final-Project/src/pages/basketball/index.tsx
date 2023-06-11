import React from "react";
import styled from "styled-components";

const StyledP = styled.div`
  /* color: ${(props) => props.theme.color.onSurface.lv1}; */
  color: black;
`;

const Basketball = () => {
  return (
    <div>
      <StyledP>Basketball</StyledP>
    </div>
  );
};

export default Basketball;
