import { useState } from 'react';
import './menu.css';
import MenuItem from './MenuItem/MenuItem';

const Menu = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="menu">
      <div
        className={isShow ? 'burger active' : 'burger'}
        onClick={() => setIsShow((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
        <div className="center"></div>
      </div>
      <div className="menuItems">
        <MenuItem
          text="Easy"
          level={{ lengthX: 9, lengthY: 9, countBomb: 10, widthBoard: 500 }}
        />
        <MenuItem
          text="Normal"
          level={{ lengthX: 16, lengthY: 16, countBomb: 40, widthBoard: 700 }}
        />
        <MenuItem
          text="Hard"
          level={{ lengthX: 30, lengthY: 16, countBomb: 99, widthBoard: 900 }}
        />
      </div>
    </div>
  );
};

export default Menu;
