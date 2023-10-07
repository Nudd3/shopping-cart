import { useEffect, useState } from 'react'
import './App.css'
import helperMethods from './utils/utils'
import Header from './components/Header';

function App() {

  const [storeItems, setStoreItems] = useState();

  const initStore = async () => {
    await helperMethods.loadDataFromApi();
  }

  useEffect(() => {
    setStoreItems(initStore())
  }, [])

  return (
    <>
      <Header />
      <h1>Hello from app</h1>
    </>
  )
}

export default App
