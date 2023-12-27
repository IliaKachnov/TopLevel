import Intro from "../components/intro/Intro"

import meet from '../assets/img/meet.webp';
import Steps from "../components/steps/Steps";
import Advantages from "../components/advantages/Advantages";

import whiteCar from '../assets/img/white-car.webp';

import '../styles/services.css';
import Conditions from "../components/conditions/Conditions";
import CarCard from "../components/carCard/CarCard";
import { Link } from "react-router-dom";
import FormRent from "../components/form/FormRent";
import AccordionFaq from "../components/accordionFaq/AccordionFaq";

const faqlist = [
  {
    q: 'What forms of payment do you accept?',
    a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
  },
  {
    q: 'When will the deposit for the vehicle be refunded?',
    a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
  },
  {
    q: 'What is the daily mileage limit of rented cars?',
    a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
  },
  {
    q: 'Where can I drive a rented car?',
    a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
  },
  {
    q: 'Is it possible to deliver a car to a specific location in Dubai?',
    a: 'We accept any form of payment: cash, cryptocurrency, bank cards',
  },
];

const advantagesDataB2b = [
  {
    title: "Your Client Is Your Client",
    text: "We do not do any direct marketing or contact with your customers. Our managers will not use branded clothing and we do not pass business cards or other promotional materials when interacting with a client we receive from a partner",
  },
  {
    title: "Tailored Solutions",
    text: "We understand the unique needs of your clientele. Collaborate with us to tailor solutions that meet specific requests, ensuring your clients experience personalized luxury that exceeds expectations",
  },
  {
    title: "New Cars with Minimal Mileage",
    text: "Experience the thrill of driving the latest models with our fleet of brand-new vehicles boasting minimal mileage",
  },
];

const Services = () => {
  return (
    <>
      <Intro introTitle='Car rental with purchase' introText='After the lease expires, you can buy the car back. Top Level Car company will help you choose a suitable rental option, help you choose and purchase the car you like, and offer favorable conditions' intro={meet}/>
      <Steps />
      <Advantages advData={advantagesDataB2b} mainTitle='We offer you the best  experience' titleBlue='Full Transparency' textBlue='We offer transparency at every stage of the process. From document preparation to the final delivery of the car - each step is illuminated for your comfort and confidence' titleBenefit='Indulge in Unmatched Comfort and Performance' button='Contact us' />
      <h2 className="services__title">We offer you a quality of service that places us among the best in our business</h2>
      <img className="services__img" src={whiteCar} alt="Top level" />
      <Conditions condTilte='Conditions for renting a car with purchase' />
      <p className="conditions__crumb">Car list</p>
      <h2 className="conditions__title">40+ cars available now</h2>
      <div className="cars__wrapper">
        <CarCard />
        <CarCard />
      </div>
      <div className="about__see-wrapper">
        <Link>
          <button className="about__see">
            <p>See more auto</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <rect width="30" height="30" rx="15" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5 10.5L19 10.5C19.2761 10.5 19.5 10.7239 19.5 11L19.5 15.5C19.5 15.7762 19.2761 16 19 16C18.7239 16 18.5 15.7762 18.5 15.5L18.5 12.2071L10.3536 20.3536L9.64645 19.6465L17.7929 11.5L14.5 11.5C14.2239 11.5 14 11.2762 14 11C14 10.7239 14.2239 10.5 14.5 10.5Z" fill="#1A187D"/>
            </svg>
          </button>
        </Link>
      </div>
      <FormRent />
      <div className="services__margin">
        <AccordionFaq faqlist={faqlist}/>
      </div>
    </>
  )
}

export default Services
