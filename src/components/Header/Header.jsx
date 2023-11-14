import './Header.scss';
import CartIcon from '../CartIcon';
import { useContext } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className='header'>
      <div className='header-title'>
        <h1>Magnation</h1>
      </div>
      <nav className='navigation'>
        <input type='checkbox' className='toggle-menu' />
        <div className='hamburger'></div>
        <ul className='menu'>
          <li>
            {/* <Link to="store">Profile page</Link> */}
            <Link to="store">Store</Link>
          </li>
          <li>
            {/* <a href=''>About</a> */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href=''>Contact</a>
          </li>
        </ul>
        <CartIcon />
      </nav>
    </header>
  );
};

export default Header;
