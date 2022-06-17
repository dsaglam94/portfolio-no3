import React from "react";

const MenuToggle = ({ nav, handleClick }) => {
  return (
    <div onClick={handleClick} className="menu-container cursor-pointer">
      <div className={nav ? "menu-toggle active group" : "menu-toggle group"}>
        <span className="group-hover:bg-accent"></span>
        <span className="group-hover:bg-accent"></span>
        <span className="group-hover:bg-accent"></span>
      </div>
    </div>
  );
};

export default MenuToggle;
