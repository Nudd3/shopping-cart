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
    let lastIndex = 21;
    for(let i = 0; i < 20; i++) {
      if (title[i] === '.') {
        lastIndex = i;
      } else if (title[i] === ' ') {
        lastIndex = i;
      }
    }
    return title.length > 20 ? title.slice(0, lastIndex).trim() : title;
    // if ( newTitle[newTitle.length - 1] === '-') {
    //   newTitle[newTitle.length -1] = '';
    // }
    // return newTitle.trim();
  },
  formatDescription: (text) => {

    // if (text.length < 250) return text;

    // if (!text.includes('.')) return text.slice(0, 250) + ' ...';

    let lastIndex = 250;
    for(let i = 0; i < 250; i++) {
      if (text[i] === '.') {
        lastIndex = i;
        
      }
    }
    return text.slice(0, lastIndex + 1);
  },
};

export default helperMethods;
