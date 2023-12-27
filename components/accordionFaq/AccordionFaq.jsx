/* eslint-disable react/prop-types */
import { useState } from 'react';
import './accordionFaq.css';
import AccordionFaqItem from './AccordionFaqItem';

const AccordionFaq = ({faqlist}) => {
  const [openId, setOpenId] = useState(null);


  return (
    <>
      <section className='accordionFaq'>
        <div className='accordionFaq__wrapper'>
          <p className='accordionFaq__crumb'>FAQ</p>
          <h2 className='accordionFaq__title'>We answer your questions</h2>
          <ul className='accordion'>
          {faqlist.map((faqItem, id) => (
            <AccordionFaqItem
            onClick={() => id === openId ? setOpenId(null): setOpenId(id)}
            faqItem={faqItem} isOpen={id === openId} key={id}/>
          ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default AccordionFaq