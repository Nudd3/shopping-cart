import { useEffect, useState, createContext } from 'react';
import './App.css';
import helperMethods from './utils/utils';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

export const ShopContext = createContext(null);

function App() {
  // All items in the store
  const [storeItems, setStoreItems] = useState([]);
  // All items in the cart
  const [cartItems, setCartItems] = useState([]);

  const [cartIsOpen, setCartIsOpen] = useState(false);

  // Total number of items in cart
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  // Find number of specific item
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  // Increase number of a specific item
  const increaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      // If item isn't in cart already
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        // If item is already in card, we just need to increase the quantity of that item
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // Decrease number of specific item
  const decreaseCartQuantity = (id) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity - 1}
          } else {
            return item;
          }
        })
      }
    })
  };

  // Removes all occurences of a specific item from the cart
  const removeFromCart = (id) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    })
  };

  useEffect(() => {
    (async () => {
      const users = await helperMethods.loadDataFromApi();
      setStoreItems(users);
    })();
  }, []);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  }

  return (
    <>
      <ShopContext.Provider
        value={{
          cartItems,
          cartQuantity,
          getItemQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          toggleCart,
          cartIsOpen
        }}
      >
        <Header toggleCart={toggleCart} />
        <div className='content'>
          <ProductList storeItems={storeItems} />
        </div>
        <ShoppingCart />
      </ShopContext.Provider>
    </>
  );
}

export default App;
