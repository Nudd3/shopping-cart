import PropTypes from 'prop-types';
import Product from '../Product/Product';
import './ProductList.scss';
import sort from '../../utils/sorting';
import { useState, useReducer } from 'react';
const ProductList = ({ storeItems, setStoreItems }) => {
  const [sortMethod, setSortMethod] = useState(null);
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);

  const handleSort = (method) => {
    if (method === 'reset' && sortMethod === 'reset') return;
    setSortMethod(method);
    if (method === sortMethod) {
      setStoreItems(storeItems.reverse());
      forceUpdate();
    } else {
      setStoreItems(sort.by(method, storeItems));
    }
  };

  return (
    <div className='product-list'>
      <div className='toolbar'>
        <ul>
          <li>Sort by: </li>
          <li
            className={
              sortMethod == 'title' ? 'sort-select selected' : 'sort-select'
            }
            onClick={() => handleSort('title')}
          >
            Name
          </li>
          <li
            className={
              sortMethod == 'price' ? 'sort-select selected' : 'sort-select'
            }
            onClick={() => handleSort('price')}
          >
            Price
          </li>
          <li
            className='sort-select'
            onClick={() => handleSort('reset')}
          >
            Reset
          </li>
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
  setStoreItems: PropTypes.func,
};

export default ProductList;
