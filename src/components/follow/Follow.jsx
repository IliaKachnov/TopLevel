import './follow.css';

import car1 from '../../assets/img/car-follow-1.webp';
import car2 from '../../assets/img/car-follow-2.webp';
import car3 from '../../assets/img/car-follow-3.webp';
import { Link } from 'react-router-dom';

const Follow = () => {
  return (
    <>
      <section className="follow">
        <div className="follow__inner-wrapper">
          <div className="follow__crumb">
            <p>social media</p>
          </div>
          <h2>Follow us on Instagram</h2>
          <div className="follow__wrapper">
            <Link to='/'>
              <img src={car1} alt="Top Level" />
            </Link>
            <Link to='/'>
              <img src={car2} alt="Top Level" />
            </Link>
            <Link to='/'>
              <div className="follow__block">
                <p>@toplevelcar</p>
              </div>
            </Link>
            <Link to='/'>
              <img src={car3} alt="Top Level" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Follow