import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './ProductList.scss';

const ProductList = ({ storeItems }) => {
  return (
    <div className='product-list'>
      <div className="toolbar">
        <ul>
          <li>Sort by: </li>
          <li>Name</li>
          <li>Price</li>
        </ul>
      </div>
      <div className='product-list'>
        {storeItems.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  storeItems: PropTypes.array,
};

export default ProductList;
