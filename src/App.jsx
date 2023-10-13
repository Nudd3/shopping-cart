import { useEffect, useState } from 'react'
import './App.css'
import helperMethods from './utils/utils'
import Header from './components/Header';
import ProductList from './components/ProductList';
function App() {

  const [storeItems, setStoreItems] = useState([]);

  

  useEffect(() => {
    (async () => {
      const users = await helperMethods.loadDataFromApi();
      setStoreItems(users);
    })();

  }, []);

  return (
    <>
      <Header />
      <ProductList storeItems={storeItems} />
    </>
  )
}

export default App
