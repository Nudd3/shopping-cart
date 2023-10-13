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
          <div className='menu-toggle'>
            <input type="checkbox" className=''/>
            <span></span>
            <span></span>
            <span></span>
            <ul className='menu'>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a href="">
                <li>Store</li>
              </a>
            </ul>
          </div>
        </nav>
        <CartIcon />  
      </div>
    </header>
  )

}

export default Header;
