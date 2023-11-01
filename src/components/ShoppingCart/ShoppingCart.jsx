import PropTypes from 'prop-types';
import './ShoppingCart.scss';
import { useContext } from 'react';
import { ShopContext } from '../../App';

const ShoppingCart = ({toggleCart}) => {

  const {cartIsOpen} = useContext(ShopContext);

  const mainClass = cartIsOpen ? 'shopping-cart shopping-cart-open' : 'shopping-cart'

  return (
    <>
        <div className="shopping-cart-background">
          <div className={mainClass}>
            <h1 className='shopping-cart-title'>In your cart</h1>
      
          </div>
        </div>
    </>
  )

}



export default ShoppingCart;