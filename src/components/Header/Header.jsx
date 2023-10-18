import './Header.scss';
import CartIcon from '../CartIcon';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-title'>
        <h1>Magnation</h1>
      </div>
      <nav className='navigation'>
        <input type="checkbox" className='toggle-menu'/>
        <div className='hamburger'></div>
        <ul className='menu'>
          <li className='header-nav-list-item'><a href=''>About</a></li>
          <li className='header-nav-list-item'><a href=''>Contact</a></li>
          <li className='header-nav-list-item'><a href=''>Store</a></li>
        </ul>
      </nav>
      <CartIcon />
    </header>
  );
};

export default Header;
