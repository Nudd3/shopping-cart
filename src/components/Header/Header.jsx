import './Header.scss';
import CartIcon from '../CartIcon';
import { Link } from "react-router-dom";
import { useState } from 'react';

const Header = () => {

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  }

  const unCheck = () => {
    setIsChecked(false);
  }

  return (
    <header className='header'>
      <div className='header-title'>
        <Link to='/' onClick={unCheck}>
          Magnation
        </Link>
      </div>
      <nav className='navigation'>
        <input type='checkbox' className='toggle-menu' checked={isChecked} onChange={toggleCheck}/>
        <div className='hamburger'></div>
        <ul className='menu'>
          <li onClick={unCheck} >
            <Link to="/">Home</Link>
          </li>
          <li onClick={unCheck} >
            <Link to="store">Store</Link>
          </li>
          <li onClick={unCheck} >
          <Link to="contact">Contact</Link>
          </li>
        </ul>
        <CartIcon />
      </nav>
    </header>
  );
};

export default Header;
