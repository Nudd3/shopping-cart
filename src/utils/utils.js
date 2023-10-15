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

    if (text.lenght < 300) return text;

    if (!text.includes('.')) return text.slice(0, 300) + ' ...';

    for(let i = 300; i > 0; i--) {
      if (text[i] === '.') {
        return text.slice(0, i+1);
      }
    }
  },
};

export default helperMethods;
