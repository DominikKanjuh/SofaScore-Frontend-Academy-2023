"use client";

import { styled } from "styled-components";

const icons = {
  home: "/assets/icons/home.svg",
  quiz: "/assets/icons/quiz.svg",
  learn: "/assets/icons/learn.svg",
  leaderboard: "/assets/icons/leaderboard.svg",
};

export type IconName = keyof typeof icons;

interface IconDivProps {
  size?: string | number;
  icon: IconName;
}

const IconDiv = styled.div<IconDivProps>`
  height: ${(props) => props.size || "24px"};
  width: ${(props) => props.size || "24px"};
  -webkit-mask-image: url("${(props) => icons[props.icon]}");
  mask-image: url("${(props) => icons[props.icon]}");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  -webkit-mask-position: center center;
  mask-repeat: no-repeat;
`;

export const Icon: React.FC<{
  icon: IconName;
  size?: string | number;
  invert?: boolean;
  className?: string;
}> = ({ icon, size, invert, className }) => {
  return <IconDiv icon={icon} size={size} className={className} />;
};

export default Icon;
