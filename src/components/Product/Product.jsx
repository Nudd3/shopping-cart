import PropTypes from 'prop-types';
import './Product.scss';
import helperMethods from '../../utils/utils';
import { useContext } from 'react';
import { ShopContext } from '../../App';

const Product = ({ item }) => {
  const { id, title, description, price, image } = item;

  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } =
    useContext(ShopContext);
  // Render nothing
  if (!item) return <div></div>;

  const quantity = getItemQuantity(id);

  return (
    <div className='product'>
      <div className='product-display'>
        <img src={image} alt='' />
      </div>
      <div className='product-info'>
        <div className='product-info-title'>
          <h2>{helperMethods.formatTitle(title)}</h2>
        </div>
        <div className='product-info-description'>
          {/* <p>{helperMethods.formatDescription(description)}</p> */}
          <p className='description-text'>{description}</p>
          <input className='expand-btn' type="checkbox" />
        </div>
        <div className='product-info-footer'>
          {quantity === 0 ? (
            <div className='product-info-footer-button'>
              <button onClick={() => increaseCartQuantity(id)}>
                Add to cart
              </button>
            </div>
          ) : (
            <div className='product-info-footer-button multiple'>
              <button onClick={() => decreaseCartQuantity(id)}>-</button>
              <div>
                <span>{quantity}</span>
              </div>
              <button
                onClick={() => {
                  increaseCartQuantity(id);
                }}
              >
                +
              </button>
            </div>
          )}

          <div className='product-info-footer-price'>
            <h2>$ {price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  item: PropTypes.object,
};

export default Product;
