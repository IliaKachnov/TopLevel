import { Link } from "react-router-dom"
import CarCard from "../components/carCard/CarCard"
import Conditions from "../components/conditions/Conditions"
import '../styles/terms.css'
import StepsHome from "../components/stepsHome/StepsHome"
import AccordionFaq from "../components/accordionFaq/AccordionFaq"
import FormRent from "../components/form/FormRent"

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

const Terms = () => {
  return (
    <>
      <section className="terms">
        <div className="terms__wrapper">
          <div className="terms__crumb">
            <span>Main</span>
            <span>Terms</span>
          </div>
          <Conditions condTilte='Car rental conditions' req='Requirements for Customers' />
        </div>
      </section>
      <p className="conditions__crumb">Car list</p>
      <h2 className="conditions__title">40+ cars available now</h2>
      <div className="cars__wrapper">
        <CarCard/>
        <CarCard/>
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
      <StepsHome />
      <AccordionFaq faqlist={faqlist}/>
      <FormRent />
    </>
  )
}

export default Terms
