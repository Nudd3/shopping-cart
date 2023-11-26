import './Header.scss';
import CartIcon from '../CartIcon';
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className='header'>
      <div className='header-title'>
        <Link to='/'>
          <h1 className='header-title'>Magnation</h1>
        </Link>
      </div>
      <nav className='navigation'>
        <input type='checkbox' className='toggle-menu' />
        <div className='hamburger'></div>
        <ul className='menu'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="store">Store</Link>
          </li>
          <li>
          <Link to="contact">Contact</Link>
          </li>
        </ul>
        <CartIcon />
      </nav>
    </header>
  );
};

export default Header;
