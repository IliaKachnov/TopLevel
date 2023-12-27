import './aboutUs.css';

import lamb from '../../assets/img/lamb.webp';
import audi from '../../assets/img/audi.webp';
import merc from '../../assets/img/merc.webp';
import bmw from '../../assets/img/bmw.webp';
import rolls from '../../assets/img/rolls.webp';
import bent from '../../assets/img/bent.webp';
import pors from '../../assets/img/pors.webp';
import subaru from '../../assets/img/subaru.webp';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
      <section className="aboutUs">
        <div className="aboutUs__wrapper">
          <div className="aboutUs__section">
            <p className='aboutUs__crumb'>about us</p>
            <h2 className='aboutUs__title'>Dubai Car Rental & Chauffeur Service</h2>
            <p className='aboutUs__text'>
              Top Level Luxury and Sport Car Rental specialises in offering luxury car rentals, with or without a driver. Based in Dubai.
            </p>
            <p className='aboutUs__text'>
              We provides a range of prestigious vehicles from the leading luxury automakers (Ferrari, Porsche, Lamborghini, Mercedes, Bentley, and etc.). We offer you a quality of service that places us among the best in our luxury car hire business.
            </p>
            <p className='aboutUs__text'>
              Our vision is to be the epitome of exclusivity in the luxury car rental industry. We aim to provide our clients with not just transportation but an immersive experience, where every drive becomes a celebration of sophistication and opulence
            </p>
            <p className='aboutUs__text'>
              We differ from other companies in that we present not only cars, but also give our clients an unforgettable experience and an individual approach to each client
            </p>
            <div className='aboutUs__numbers'>
              <div className='aboutUs__number'>
                <p className='aboutUs__amount'>40+</p>
                <p className='aboutUs__subtitle'>unique cars</p>
              </div>
              <div className='aboutUs__number'>
                <p className='aboutUs__amount'>1000+</p>
                <p className='aboutUs__subtitle'>satisfied clients</p>
              </div>
              <div className='aboutUs__number'>
                <p className='aboutUs__amount'>17</p>
                <p className='aboutUs__subtitle'>premium brands</p>
              </div>
            </div>
          </div>
          <div className='aboutUs__img'>
            <img src={subaru} alt="Top Level" />
          </div>
        </div>
        <div className='aboutUs__logos'>
          <Link>
            <img src={lamb} alt="Top Level" />
          </Link>
          <Link><img src={audi} alt="Top Level" /></Link>
          <Link><img src={merc} alt="Top Level" /></Link>
          <Link><img src={bmw} alt="Top Level" /></Link>
          <Link><img src={rolls} alt="Top Level" /></Link>
          <Link><img src={bent} alt="Top Level" /></Link>
          <Link><img src={pors} alt="Top Level" /></Link>
        </div>
      </section>
    </>
  )
}

export default AboutUs