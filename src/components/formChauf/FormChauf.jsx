import './formChauf.css';
import formChauf from '../../assets/img/formChauf.webp'

const FormChauf = () => {
  return (
    <>
     <section className='formChauf'>
        <div className='formChauf__wrapper'>
          <div className='formChauf__text-wrapper'>
            <h2 className='formChauf__title'>Chauffeur Driven Cars in Dubai</h2>
            <p className='formChauf__text'>Our luxury fleet of chauffeur driven cars are available for airport transfers, corporate hospitality and events, business meetings and much more</p>
            <p className='formChauf__text'>Share your phone number with us so that we can call you back and tell you more about the service</p>
            <form className='formChauf__form' action="">
              <div className='formChauf__inputs'>
                <input className='formChauf__input' type="text" placeholder='Name' />
                <input className='formChauf__input' type="tel" placeholder='+971 __-___-____' />
              </div>
              <div className='formChauf__send-wrapper'>
                <p className='formChauf__click'>By clicking on the button, you agree to the privacy policy</p>
                <button className='formChauf__send'>
                  <p>Send a request</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <rect x="0.5" width="30" height="30" rx="15" fill="#1A187D"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M15 10.5L19.5 10.5C19.7761 10.5 20 10.7239 20 11L20 15.5C20 15.7762 19.7761 16 19.5 16C19.2239 16 19 15.7762 19 15.5L19 12.2071L10.8536 20.3536L10.1465 19.6465L18.2929 11.5L15 11.5C14.7239 11.5 14.5 11.2762 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5Z" fill="white"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <div className='formChauf__img'>
            <img src={formChauf} alt="Top Level" />
          </div>
        </div>
     </section>
    </>
  )
}

export default FormChauf