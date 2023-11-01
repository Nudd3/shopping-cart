import './ShoppingCart.scss';
import { useContext } from 'react';
import { ShopContext } from '../../App';

const ShoppingCart = () => {

  const {cartIsOpen} = useContext(ShopContext);

  const mainClass = cartIsOpen ? 'shopping-cart shopping-cart-open' : 'shopping-cart'
  const background = cartIsOpen 
    ? 'shopping-cart-background shopping-cart-background-cover'
    : 'shopping-cart-background';

  return (
    <>
        <div className={background}>
          <div className={mainClass}>
            <h1 className='shopping-cart-title'>In your cart</h1>
      
          </div>
        </div>
    </>
  )

}



export default ShoppingCart;