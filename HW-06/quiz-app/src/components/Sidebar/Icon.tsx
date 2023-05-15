import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineQuiz } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { MdOutlineLeaderboard } from "react-icons/md";

const icons = {
  home: <AiOutlineHome />,
  quiz: <MdOutlineQuiz />,
  learn: <BiBrain />,
  leaderboard: <MdOutlineLeaderboard />,
};

export type IconName = keyof typeof icons;

interface IconProps {
  icon: IconName;
}

const Icon: React.FC<IconProps> = ({ icon }) => {
  return <>{icons[icon]}</>;
};

export default Icon;
