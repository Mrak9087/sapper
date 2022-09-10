import { FC } from 'react';
import ReactDOM from 'react-dom';

import './modal.css';

interface IModal {
  text: string;
  isShow: boolean;
  close: () => void;
}

const Modal: FC<IModal> = ({ text, isShow, close }) => {
  const portal: HTMLElement = document.getElementById('portal') as HTMLElement;
  return ReactDOM.createPortal(
    <div className={isShow ? 'modal show' : 'modal'} onClick={() => close()}>
      {isShow ? <div className="contentModal">{text}</div> : ''}
    </div>,
    portal
  );
};

export default Modal;
