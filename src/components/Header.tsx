import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="header-left"></div>
      <div className="header-center"></div>
      <div className="header-right">
        <div className="icon"></div>
        <div className="txt"></div>
      </div>
    </div>
  );
};

export default Header;
