import helperMethods from './utils';

const sort = {

  by: (method, items) => {
    return sort[method](items);
  },

  name: (items) => {
    console.log('name sort')
    console.log(items);

  },

  price: (items) => {
    console.log('price sort')
    console.log(items);
  }
}

export default sort;