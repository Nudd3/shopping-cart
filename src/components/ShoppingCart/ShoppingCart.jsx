import PropTypes from 'prop-types';
import './ShoppingCart.scss';
import { useContext } from 'react';
import { ShopContext } from '../../App';

const ShoppingCart = ({toggleCart}) => {

  const {cartIsOpen} = useContext(ShopContext);

  return (
    <>
      {cartIsOpen &&
        <div className="shopping-cart-background">
          <div className="shopping-cart">
            <h1 className='shopping-cart-title'>In your cart</h1>
      
          </div>
        </div>
    }
    </>
  )

}



export default ShoppingCart;