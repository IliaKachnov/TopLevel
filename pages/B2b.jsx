import AccordionFaq from "../components/accordionFaq/AccordionFaq";
import Advantages from "../components/advantages/Advantages"
import Cases from "../components/cases/Cases";
import Form from "../components/form/FormRent"
import Intro from "../components/intro/Intro"

import intro from '../assets/img/intro.webp'

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

const B2b = () => {
  return (
    <>
      <Intro intro={intro} introTitle='Deliver an unforgettable experience partnering with Top Level Car' introText='From providing luxury vehicles for various clientele to tailoring solutions that meet specific business needs, partnering with us ensures access to unparalleled luxury and exceptional service' />
      <Advantages mainTitle='We offer you the best partnership experience' advData={advantagesDataB2b} titleBlue='Marketing Package' textBlue='We will prepare a separate catalog with our cars in your color palette, with your logos and your contacts. All photos of our fleet are available at any second for customer interaction or use on your social media/website' titleBenefit='Benefit from Special Rates and Additional Perks Designed to Maximize the Partnership Advantages' button='Contact b2b manager' />
      <Cases />
      <AccordionFaq faqlist={faqlist}/>
      <Form />
    </>
  )
}

export default B2b