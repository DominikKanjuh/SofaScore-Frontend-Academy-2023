import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 116px;
  background-color: ${(props) => props.theme.color.primary.default};
`;

const Footer = () => {
  return <StyledFooter>Footer</StyledFooter>;
};

export default Footer;
