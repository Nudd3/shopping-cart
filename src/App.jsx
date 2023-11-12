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
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // Removes all occurences of a specific item from the cart
  const removeFromCart = (id) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    (async () => {
      const users = await helperMethods.loadDataFromApi();
      setStoreItems(users);
    })();
  }, []);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

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
          cartIsOpen,
        }}
      >
        <Header toggleCart={toggleCart} />
        <div className='content background'>
          <ProductList storeItems={storeItems} setStoreItems={setStoreItems} />
          {/* <svg
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
            // xmlns:xlink='http://www.w3.org/1999/xlink'
            // xmlns:svgjs='http://svgjs.dev/svgjs'
            viewBox='0 0 800 400'
          >
            <path
              d='M95.06725311279297,238.5650177001953C101.65918102264405,230.5605327606201,121.12106266021729,186.39012870788574,132.73541259765625,192.82510375976562C144.3497625350952,199.2600788116455,146.05380058288574,281.143478012085,161.43496704101562,275.3363037109375C176.8161334991455,269.52912940979,203.99102172851562,153.834073638916,220.62779235839844,159.64125061035156C237.26456298828126,165.44842758178712,236.41254234313965,311.81613540649414,256.5022277832031,308.5201721191406C276.5919132232666,305.2242088317871,313.2959503173828,135.47085494995116,335.4259948730469,140.8071746826172C357.55603942871096,146.14349441528321,358.0044692993164,339.013427734375,382.9596252441406,339.013427734375C407.91478118896487,339.013427734375,453.3856330871582,139.23766479492187,478.0268859863281,140.8071746826172C502.668138885498,142.3766845703125,498.8116340637207,351.4349718093872,523.7667846679688,347.9820556640625C548.7219352722168,344.5291395187378,599.4394058227539,116.52465515136718,620.6277465820312,121.07622528076172C641.8160873413086,125.62779541015625,622.0851669311523,374.14797801971434,644.843017578125,373.99102783203125C667.6008682250977,373.83407764434816,728.2286651611328,130.0672622680664,750.672607421875,120.17936706542969C773.1165496826172,110.29147186279297,769.1703521728516,282.95962409973146,773.0941162109375,317.48876953125'
              fill='none'
              strokeWidth='25'
              stroke='url("#SvgjsLinearGradient1001")'
              strokeLinecap='round'
              transform='matrix(-1.0000000000000002,-3.885780586188048e-16,3.885780586188048e-16,-1.0000000000000002,834.080680847168,446.9009017944337)'
              strokeDasharray='0 3'
              strokeOpacity='1'
            ></path>
            <defs>
              <linearGradient id='SvgjsLinearGradient1001'>
                <stop stopColor='#51bfc9' offset='0'></stop>
                <stop stopColor='#e03838' offset='1'></stop>
              </linearGradient>
            </defs>
          </svg> */}
        </div>
        <ShoppingCart />
      </ShopContext.Provider>
      {/* <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div>
      <div className='firefly'></div> */}
    </>
  );
}

export default App;
