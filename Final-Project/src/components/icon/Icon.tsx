import React from "react";
import styled from "styled-components";

const icons = {
  settings: "/assets/icons/settings.svg",
  sofascore: "/assets/icons/logo_sofascore.svg",
  rights: "/assets/icons/rights.svg",
};

type IconName = keyof typeof icons;
interface IconProps {
  icon: IconName;
  height?: string | number;
  width?: string | number;
  color?: string;
}

const StyledIcon = styled.img<IconProps>`
  height: ${({ height }) => (height ? height : "24px")};
  width: ${({ width }) => (width ? width : "24px")};
  -webkit-mask-image: ${({ icon }) => `url('${icons[icon]}')`};
  mask-image: ${({ icon }) => `url('${icons[icon]}')`};
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center center;
  mask-position: center center;
  mask-repeat: no-repeat;
  //if there is color prop then use it, otherwise use theme color
  background-color: ${(props) => props.color || props.theme.color.surface.s1};
`;

export const Icon: React.FC<IconProps> = ({ icon, height, width, color }) => {
  return <StyledIcon icon={icon} width={width} height={height} color={color} />;
};

export default Icon;
