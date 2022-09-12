import React, { FC, useEffect, useRef } from 'react';
import MenuItem from './MenuItem';

import './menuContent.css'

interface IMenuContent {
  closeMenu: () => void;
}

const MenuContent: FC<IMenuContent> = ({ closeMenu }) => {
  const refMenu = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('.menu')) {
        closeMenu();
      }
    };
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <div className="menuContent">
      <MenuItem text="Easy" level={{ lengthX: 9, lengthY: 9, countBomb: 10, widthBoard: 500 }} />
      <MenuItem
        text="Normal"
        level={{ lengthX: 16, lengthY: 16, countBomb: 40, widthBoard: 700 }}
      />
      <MenuItem text="Hard" level={{ lengthX: 30, lengthY: 16, countBomb: 99, widthBoard: 900 }} />
    </div>
  );
};

export default MenuContent;
