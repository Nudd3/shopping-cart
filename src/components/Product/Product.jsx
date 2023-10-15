import PropTypes from 'prop-types';
import './Product.scss';
import helperMethods from '../../utils/utils';

const Product = ({ item }) => {
  const { id, title, description, price, image } = item;

  // Render nothing
  if (!item) return <div></div>;

  const t = 1;

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
          <h2>{helperMethods.formatDescription(description)}</h2>
        </div>
        <div className='product-info-footer'>
          {t === 0 ? (
            <div className='product-info-footer-button'>
              <button>Add to cart</button>
            </div>
          ) : (
            <div className='product-info-footer-button multiple'>
              <button>-</button>
              <span>{t}</span>
              <button>+</button>
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
