import React from "react";
import Icon from "../icon/Icon";

const Header = () => {
  return (
    <div className="HEADER">
      <Icon icon="sofascore" color="red" width={132} />
      <Icon icon="settings" color="green" width={50} height={50} />
    </div>
  );
};

export default Header;
