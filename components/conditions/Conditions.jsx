/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import Accordion from '../accordion/Accordion';
import './conditions.css';



const faqlist1 = [
  {
    q: 'Security Deposit',
    a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
  },
  {
    q: 'Additional drivers',
    a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
  },
  {
    q: 'Foreign citizens',
    a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
  },
  {
    q: 'Car delivery / return',
    a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
  },
];

const faqlist2 = [
  {
    q: 'Usage Area',
    a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
  },
  {
    q: 'Additional expenses',
    a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
  },
  {
    q: 'Car booking',
    a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
  },
  {
    q: 'PROHIBITED',
    a: 'We can deliver or pick up the car to any place convenient for you for an additional fee, depending on the location and the chosen car.',
  },
];

const Conditions = ({condTilte, req, addInfo}) => {
  return (
    <>
      <section className='conditions'>
        <div className='conditions__wrapper'>
          <h2 className='conditions__title'>{condTilte}</h2>
          <p className='conditions__req'>{req}</p>
          <div className='conditions__blocks'>
            <div className='conditions__block'>
              <p>Customer Age</p>
              <h4>From 21 y.o.</h4>
            </div>  
            <div className='conditions__block'>
              <p>Driving Experience</p>
              <h4>From 1 year</h4>
            </div>  
            <div className='conditions__block'>
              <p>Documents</p>
              <h4>Passport, Driver's license</h4>
            </div>  
          </div>
          <p className='conditions__info'>{addInfo}</p>
          <div className='conditions__accordion-wrapper'>
            <div className='conditions__accordion'>
              <Accordion faqlist={faqlist1}/>
            </div>
            <div className='conditions__accordion'>
              <Accordion faqlist={faqlist2}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Conditions