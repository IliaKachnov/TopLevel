import Accordion from "../accordion/Accordion";
import cars from '../../assets/img/cars.webp';

import './cases.css';


const faqlist = [
  {
    q: 'Car Rental Companies',
    a: 'Offer your clients a unique opportunity to test drive our luxury vehicles before making a purchase. Allow them to feel the luxury and comfort, potentially influencing their decision',
  },
  {
    q: 'VIP Service for Special Events',
    a: 'Offer your clients a unique opportunity to test drive our luxury vehicles before making a purchase. Allow them to feel the luxury and comfort, potentially influencing their decision',
  },
  {
    q: 'Concierge Agency',
    a: 'Offer your clients a unique opportunity to test drive our luxury vehicles before making a purchase. Allow them to feel the luxury and comfort, potentially influencing their decision',
  },
  {
    q: 'Car Dealerships',
    a: 'Offer your clients a unique opportunity to test drive our luxury vehicles before making a purchase. Allow them to feel the luxury and comfort, potentially influencing their decision',
  },
];


const Cases = () => {
  return (
    <>
      <section className="cases">
        <p className="cases__crumb">Cases</p>
        <h2 className="cases__title">Examples of partner integrations</h2>
        <div className="cases__accordion-wrapper">
          <div className="cases__accordion">
            <Accordion faqlist={faqlist} />
            <div className="cases__info">
              <h3>Other companies</h3>
              <p>We are open to partnerships for cross-marketing and joint promotions with market leaders in Dubai</p>
            </div>
          </div>
          <div className="cases__img">
            <img src={cars} alt="Top level" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Cases