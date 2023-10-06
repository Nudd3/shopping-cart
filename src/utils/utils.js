const helperMethods = {
  loadDataFromApi: async () => {
    const url = 'https://fakestoreapi.com/products/';
    const items = [];
    for (let i = 1; i < 21; i++) {
      const res = await fetch(url + `${i}`, { mode: 'cors' });
      const data = await res.json();
      items.push({
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.image,
      });
    }
    return items;
  },

  formatTitle: () => {}
};

export default helperMethods;
