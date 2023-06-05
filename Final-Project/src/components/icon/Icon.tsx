import React from "react";
import styled from "styled-components";

type IconName = keyof typeof icons;

const icons = {
  settings: "/assets/icons/settings.svg",
};

interface IconProps {
  icon: IconName;
  size?: string | number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, size = 24, color }) => {
  const iconPath = icons[icon];

  return <img src={iconPath} width={size} height={size} color={color} />;
};

export default Icon;
