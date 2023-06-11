import React from "react";
import styled from "styled-components";

const StyledP = styled.div`
  /* color: ${(props) => props.theme.color.onSurface.lv1}; */
  color: black;
`;

const AmericanFootball = () => {
  return (
    <div>
      <StyledP>American Football</StyledP>
    </div>
  );
};

export default AmericanFootball;
