const sort = {

  by: (method, items) => {
    const newOrder =  items.sort(sort[method]);
    return newOrder;
  },

  title: (a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;

  },

  price: (a, b) => {
    if (a.price < b.price) return -1;
    if (a.price > b.price) return 1;
    return 0;
  },

  reset: (a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  }
}

export default sort;