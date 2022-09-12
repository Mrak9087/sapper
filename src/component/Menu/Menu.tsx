import React, { useEffect, useRef, useState } from 'react';
import './menu.css';
import MenuContent from './MenuContent';

const Menu = () => {
  const [isShow, setIsShow] = useState(false);

  const handleCloseMenu = () => {
    setIsShow(false);
  };

  const handleBurgerClick = () => {
    setIsShow((prev) => !prev);
  }

  return (
    <div className="menu">
      <div
        className={isShow ? 'burger active' : 'burger'}
        onClick={()=>handleBurgerClick()}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="menuItems">
        {isShow ? <MenuContent closeMenu={handleCloseMenu} /> : <></>}
      </div>
    </div>
  );
};

export default Menu;
