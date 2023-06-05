import React from "react";
import styled from "styled-components";

const icons = {
  settings: "/assets/icons/settings.svg",
  sofascore: "/assets/icons/logo_sofascore.svg",
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
  -webkit-mask-size: contain;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
  background-color: ${({ color }) => color};
`;

export const Icon: React.FC<IconProps> = ({ icon, height, width, color }) => {
  return <StyledIcon icon={icon} width={width} height={height} color={color} />;
};

export default Icon;
