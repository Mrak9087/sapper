import './header.css';
import Menu from '../Menu';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Menu />
        <span className="logo">Sapper</span>
      </div>
    </div>
  );
};

export default Header;
