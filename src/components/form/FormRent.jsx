import formImg from '../../assets/img/form-img.webp';

import './formRent.css';

const FormRent = () => {
  return (
    <>
      <div className="form__wrapper">
        <div className="form__img-wrapper">
          <img className='form__img' src={formImg} alt="Top Level" />
        </div>
        <div className='form__text-wrapper'>
          <h2>We will contact you in a minute</h2>
          <p className='form__text'>Share your phone number with us so we can give you a call back</p>
          <form className='form__form' action="">
            <div className='form__inputs'>
              <input className='form__name' type="text" placeholder='Name' />
              <input  className='form__phone' type="tel" placeholder='+971 __-___-____' />
            </div>
            <div className='form__btn-wrapper'>
              <p className='form__tip'>By clicking on the button, you agree to the privacy policy</p>
              <button className='form__btn'>
                <p>Send a request</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                  <rect x="0.5" width="30" height="30" rx="15" fill="#1A187D"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M15 10.5L19.5 10.5C19.7761 10.5 20 10.7239 20 11L20 15.5C20 15.7762 19.7761 16 19.5 16C19.2239 16 19 15.7762 19 15.5L19 12.2071L10.8536 20.3536L10.1465 19.6465L18.2929 11.5L15 11.5C14.7239 11.5 14.5 11.2762 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5Z" fill="white"/>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default FormRent