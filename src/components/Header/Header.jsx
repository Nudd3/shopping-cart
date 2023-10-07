import './Header.scss'
import CartIcon from '../CartIcon';

const Header = () => {

  return (
    <header className='header'>
      <div className="header-title">
        <h1>Title</h1>
      </div>
      <div className="header-nav">
        <nav>
          <ul className='nav-list'>
            <li>About</li>
            <li>Contact</li>
            <li>Store</li>
          </ul>
        </nav>
        <CartIcon />
      </div>
    </header>
  )

}

export default Header;