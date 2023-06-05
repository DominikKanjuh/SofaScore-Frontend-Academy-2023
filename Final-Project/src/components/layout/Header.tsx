import React from "react";
import SofascoreSVG from "../../../public/assets/SofascoreSVG";
import Icon from "../icon/Icon";

const Header = () => {
  return (
    <div className="HEADER">
      <SofascoreSVG color={"black"} width="132" />
      <Icon icon="settings" color="red" size={100} />
    </div>
  );
};

export default Header;
