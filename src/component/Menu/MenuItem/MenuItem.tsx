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

  const handleClick = () => {
    dispatch(setLevel(level));
    console.log(level);
  };
  return (
    <div onClick={handleClick} className="menuItem">
      {text}
    </div>
  );
};

export default MenuItem;
