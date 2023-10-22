import './Header.scss';
import CartIcon from '../CartIcon';
import { ShopContext } from '../../App';
import { useContext } from 'react';

const Header = () => {

  return (
    <header className='header'>
      <div className='header-title'>
        <h1>Magnation</h1>
      </div>
      <nav className="navigation">

        <input type="checkbox" className='toggle-menu'/>
        <div className="hamburger"></div>

        <ul className="menu">
          <li><a href="">Store</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>

        
      <CartIcon />
      </nav>
    </header>
  );
};

export default Header;
