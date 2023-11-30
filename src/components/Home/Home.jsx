import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className='bg-image bg-settings'>

      <div className="home">
        <div className="home-text-container">
          <h1>Best webshop of 2023</h1>
          <p>Over 300.000 people voted for us as the best webshop of 2023, and with christmas coming up, you can check out why!<br></br><br></br> With an amazing sortiment of different products, you will definitely find something you love!</p>
          <Link to='store' className='home-btn'>
            Go To Store
          </Link>
        </div>
      </div>
        
    </div>
  )
}

export default Home;