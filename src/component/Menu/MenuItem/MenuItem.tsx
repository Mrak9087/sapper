import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ISapperStore, setLevel } from '../../../store/reducers/sapperSlice';
import { AppDispatch, RootStore } from '../../../store/store';

import './menuItem.css';

interface IMenuItem {
  text: string;
  level: ISapperStore;
}

const MenuItem: FC<IMenuItem> = ({ text, level }) => {
  const store = useSelector((state: RootStore) => state);
  const dispatch = useDispatch<AppDispatch>();

  let cl = '';

  const handleClick = () => {
    dispatch(setLevel(level));
  };

  if (
    level.countBomb === store.countBomb &&
    level.lengthX === store.lengthX &&
    level.lengthY === store.lengthY &&
    level.widthBoard === store.widthBoard
  ) {
    cl = 'activeItem';
  }

  return (
    <div onClick={handleClick} className={`menuItem ${cl}`}>
      {text}
    </div>
  );
};

export default MenuItem;
