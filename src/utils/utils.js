const helperMethods = {
  loadDataFromApi: async () => {
    const url = 'https://fakestoreapi.com/products/';
    const items = [];
    for (let i = 1; i < 21; i++) {
      const res = await fetch(url + `${i}`, { mode: 'cors' });
      const data = await res.json();
      items.push({
        id: data.id,
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.image,
      });
    }
    return items;
  },

  formatTitle: (title) => {
    return title.length > 20 ? title.slice(0, 20) : title;
  },
  formatDescription: (text) => {
    return text.length > 200 ? text.slice(0, 200) : text;
  },
};

export default helperMethods;
