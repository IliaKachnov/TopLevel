import { useState } from 'react';
import logo from '../../assets/img/logo.svg';
import './header.css'
import { Link } from 'react-router-dom';

import burger from '../../assets/img/burger.svg';
import logoBurger from '../../assets/img/logo-burger.png'

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [langDropdown, setLangDropdown] = useState(false);
  const [lang, setLang] = useState(false);
  const [active, setActive] = useState(false)
  const [openBurger, setOpenBurger] = useState(false);


  return (
    <>
      <header className='header'>
        <div className='header__wrapper'>
          <div className='header__burger-wrapper' onClick={() => setOpenBurger(true)}>
            <img src={burger} alt="Top Level" />
          </div>
          <div className='header__logo-wrapper'>
            <img className='header__logo' src={logo} alt="Top Level" />
            <div className={`header__dropdown ${langDropdown ? 'active' : ""}`} onClick={() => setLangDropdown(!langDropdown)}>
              <p className='header__language'>{lang ? 'RU' : 'EN'}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.2832L3.56906 5.8118L8.0474 10.2901L12.5257 5.8118L12.9972 6.2832L8.0474 11.233L3.09766 6.2832Z" fill="#3936C8"/>
              </svg>
              <div className='header__lang-dropdown'>
                <p onClick={() => setLang(false)}>EN</p>
                <p onClick={() => setLang(true)}>RU</p>
              </div>
            </div>
          </div>
          <ul className='header__links-wrapper'>
            <Link to='/catalog'><li className='header__link'><p>Car List</p></li></Link>
            <Link to='/about'><li className='header__link'><p>About Us</p></li></Link>
            <Link to='/terms'><li className='header__link'><p>Terms</p></li></Link>
            <Link to='/'><li className='header__link'><p>Partnership</p></li></Link>
            <li className={`header__link ${activeDropdown ? 'active' : ""}`} onClick={() => setActiveDropdown(!activeDropdown)}>
              <p>Services</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.59763 6.2832L4.06904 5.8118L8.54738 10.2901L13.0257 5.8118L13.4971 6.2832L8.54738 11.233L3.59763 6.2832Z" fill="#7D7D7D"/>
              </svg>
              <div className='header__link-dropdown'>
                <Link to='/'><p>Export & Import</p></Link>
                <Link to='/'><p>Rent-to-own</p></Link>
              </div>
            </li>
            <Link to='/contacts'><li className='header__link'><p>Contacts</p></li></Link>
          </ul>
          <div className='header__phone-wrapper'>
            <p className='header__phone'>(093) 433-88-88</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="16" fill="#1A187D"/>
              <path d="M22.3415 9.65019C20.761 8.07519 18.6537 7.2002 16.4293 7.2002C11.8049 7.2002 8.05854 10.9335 8.05854 15.5419C8.05854 17.0002 8.46829 18.4585 9.17073 19.6835L8 24.0002L12.4488 22.8335C13.6781 23.4752 15.0244 23.8252 16.4293 23.8252C21.0537 23.8252 24.8 20.0919 24.8 15.4835C24.7415 13.3252 23.9219 11.2252 22.3415 9.65019ZM20.4683 18.5169C20.2927 18.9835 19.4732 19.4502 19.0634 19.5085C18.7122 19.5669 18.2439 19.5669 17.7756 19.4502C17.4829 19.3335 17.0732 19.2169 16.6049 18.9835C14.4976 18.1085 13.1512 16.0085 13.0341 15.8335C12.9171 15.7169 12.1561 14.7252 12.1561 13.6752C12.1561 12.6252 12.6829 12.1585 12.8585 11.9252C13.0341 11.6919 13.2683 11.6919 13.4439 11.6919C13.561 11.6919 13.7366 11.6919 13.8537 11.6919C13.9707 11.6919 14.1463 11.6335 14.322 12.0419C14.4976 12.4502 14.9073 13.5002 14.9659 13.5585C15.0244 13.6752 15.0244 13.7919 14.9659 13.9085C14.9073 14.0252 14.8488 14.1419 14.7317 14.2585C14.6146 14.3752 14.4976 14.5502 14.439 14.6085C14.3219 14.7252 14.2049 14.8419 14.322 15.0169C14.439 15.2502 14.8488 15.8919 15.4927 16.4752C16.3122 17.1752 16.9561 17.4085 17.1902 17.5252C17.4244 17.6419 17.5415 17.5835 17.6585 17.4669C17.7756 17.3502 18.1854 16.8835 18.3024 16.6502C18.4195 16.4169 18.5951 16.4752 18.7707 16.5335C18.9463 16.5919 20 17.1169 20.1756 17.2335C20.4098 17.3502 20.5268 17.4085 20.5854 17.4669C20.6439 17.6419 20.6439 18.0502 20.4683 18.5169Z" fill="white"/>
            </svg>
          </div>
        </div>
        <div className={`burger ${openBurger ? 'active' : ""} mobile`}>
          <div className='burger__wrapper'>
            <div className='burger__head'>
              <svg onClick={() => setOpenBurger(!openBurger)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M12.8979 28L12 27.1021L19.1021 20L12 12.8979L12.8979 12L20 19.1021L27.1021 12L28 12.8979L20.8979 20L28 27.1021L27.1021 28L20 20.8979L12.8979 28Z" fill="white"/>
              </svg>
              <img src={logoBurger} alt="Top level" />
              
              <div className={`header__dropdown ${langDropdown ? 'active' : ""} mobile`} onClick={() => setLangDropdown(!langDropdown)}>
                <p className='header__language'>{lang ? 'RU' : 'EN'}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.2832L3.56906 5.8118L8.0474 10.2901L12.5257 5.8118L12.9972 6.2832L8.0474 11.233L3.09766 6.2832Z" fill="#3936C8"/>
                </svg>
                <div className='header__lang-dropdown'>
                  <p onClick={() => setLang(false)}>EN</p>
                  <p onClick={() => setLang(true)}>RU</p>
                </div>
              </div>
            </div>
            <div className='burger__body'>
              <ul className='burger__list'>
                <Link to='/'><li className='burger__link'>Car List</li></Link>
                <Link to='/'><li className='burger__link'>About Us</li></Link>
                <Link to='/'><li className='burger__link'>Terms</li></Link>
                <Link to='/'><li className='burger__link'>Partnership</li></Link>
                <Link to='/'>
                  <li className={`burger__link ${active ? 'active' : ""} mobile`} onClick={() => setActive(!active)}>
                    <div className='burger__link-wrapper'>
                      <p className='burger__text'>Services</p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.09766 6.7832L3.56906 6.3118L8.0474 10.7901L12.5257 6.3118L12.9972 6.7832L8.0474 11.733L3.09766 6.7832Z" fill="white"/>
                      </svg>
                    </div>
                    <div className='burger__dropdown'>
                      <p>Export & Import</p>
                      <p>Rent-to-own</p>
                    </div>
                  </li>
                </Link>
                <Link to='/'><li className='burger__link'>Contacts</li></Link>
              </ul>
            </div>
            <div className='burger__footer'>
              <p>(093) 433-88-88</p>
              <div className='burger__socials'>
                <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="20" fill="#1A187D"/>
                  <path d="M27.9268 12.0625C25.9512 10.0937 23.3171 9 20.5366 9C14.7561 9 10.0732 13.6667 10.0732 19.4271C10.0732 21.25 10.5854 23.0729 11.4634 24.6042L10 30L15.561 28.5417C17.0976 29.3438 18.7805 29.7812 20.5366 29.7812C26.3171 29.7812 31 25.1146 31 19.3542C30.9268 16.6563 29.9024 14.0312 27.9268 12.0625ZM25.5854 23.1458C25.3659 23.7292 24.3415 24.3125 23.8293 24.3854C23.3902 24.4583 22.8049 24.4583 22.2195 24.3125C21.8537 24.1667 21.3415 24.0208 20.7561 23.7292C18.122 22.6354 16.439 20.0104 16.2927 19.7917C16.1463 19.6458 15.1951 18.4062 15.1951 17.0937C15.1951 15.7812 15.8537 15.1979 16.0732 14.9062C16.2927 14.6146 16.5854 14.6146 16.8049 14.6146C16.9512 14.6146 17.1707 14.6146 17.3171 14.6146C17.4634 14.6146 17.6829 14.5417 17.9024 15.0521C18.122 15.5625 18.6341 16.875 18.7073 16.9479C18.7805 17.0938 18.7805 17.2396 18.7073 17.3854C18.6341 17.5312 18.561 17.6771 18.4146 17.8229C18.2683 17.9687 18.1219 18.1875 18.0488 18.2604C17.9024 18.4062 17.7561 18.5521 17.9024 18.7708C18.0488 19.0625 18.561 19.8646 19.3659 20.5937C20.3902 21.4687 21.1951 21.7604 21.4878 21.9063C21.7805 22.0521 21.9268 21.9792 22.0732 21.8333C22.2195 21.6875 22.7317 21.1042 22.878 20.8125C23.0244 20.5208 23.2439 20.5938 23.4634 20.6667C23.6829 20.7396 25 21.3958 25.2195 21.5417C25.5122 21.6875 25.6585 21.7604 25.7317 21.8333C25.8049 22.0521 25.8049 22.5625 25.5854 23.1458Z" fill="white"/>
                </svg></Link>
                <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="20" fill="#1A187D"/>
                  <path d="M28 12.6022L24.9946 28.2923C24.9946 28.2923 24.5741 29.3801 23.4189 28.8584L16.4846 23.3526L16.4524 23.3364C17.3891 22.4654 24.6524 15.7027 24.9698 15.3961C25.4613 14.9214 25.1562 14.6387 24.5856 14.9974L13.8568 22.053L9.71764 20.6108C9.71764 20.6108 9.06626 20.3708 9.00359 19.8491C8.9401 19.3265 9.73908 19.0439 9.73908 19.0439L26.6131 12.1889C26.6131 12.1889 28 11.5579 28 12.6022Z" fill="white"/>
                </svg></Link>
                <Link to='/'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="20" fill="#1A187D"/>
                  <path d="M20 11.8072C22.6506 11.8072 23.0121 11.8072 24.0964 11.8072C25.0602 11.8072 25.5422 12.0482 25.9036 12.1687C26.3855 12.4096 26.747 12.5301 27.1084 12.8916C27.4699 13.253 27.7108 13.6145 27.8313 14.0964C27.9518 14.4578 28.0723 14.9398 28.1928 15.9036C28.1928 16.988 28.1928 17.2289 28.1928 20C28.1928 22.7711 28.1928 23.0121 28.1928 24.0964C28.1928 25.0602 27.9518 25.5422 27.8313 25.9036C27.5904 26.3855 27.4699 26.747 27.1084 27.1084C26.747 27.4699 26.3855 27.7108 25.9036 27.8313C25.5422 27.9518 25.0602 28.0723 24.0964 28.1928C23.0121 28.1928 22.7711 28.1928 20 28.1928C17.2289 28.1928 16.988 28.1928 15.9036 28.1928C14.9398 28.1928 14.4578 27.9518 14.0964 27.8313C13.6145 27.5904 13.253 27.4699 12.8916 27.1084C12.5301 26.747 12.2892 26.3855 12.1687 25.9036C12.0482 25.5422 11.9277 25.0602 11.8072 24.0964C11.8072 23.0121 11.8072 22.7711 11.8072 20C11.8072 17.2289 11.8072 16.988 11.8072 15.9036C11.8072 14.9398 12.0482 14.4578 12.1687 14.0964C12.4096 13.6145 12.5301 13.253 12.8916 12.8916C13.253 12.5301 13.6145 12.2892 14.0964 12.1687C14.4578 12.0482 14.9398 11.9277 15.9036 11.8072C16.988 11.8072 17.3494 11.8072 20 11.8072ZM20 10C17.2289 10 16.988 10 15.9036 10C14.8193 10 14.0964 10.241 13.494 10.4819C12.8916 10.7229 12.2892 11.0843 11.6867 11.6867C11.0843 12.2892 10.8434 12.7711 10.4819 13.494C10.241 14.0964 10.1205 14.8193 10 15.9036C10 16.988 10 17.3494 10 20C10 22.7711 10 23.0121 10 24.0964C10 25.1807 10.241 25.9036 10.4819 26.506C10.7229 27.1084 11.0843 27.7108 11.6867 28.3133C12.2892 28.9157 12.7711 29.1566 13.494 29.5181C14.0964 29.759 14.8193 29.8795 15.9036 30C16.988 30 17.3494 30 20 30C22.6506 30 23.0121 30 24.0964 30C25.1807 30 25.9036 29.759 26.506 29.5181C27.1084 29.2771 27.7108 28.9157 28.3133 28.3133C28.9157 27.7108 29.1566 27.2289 29.5181 26.506C29.759 25.9036 29.8795 25.1807 30 24.0964C30 23.0121 30 22.6506 30 20C30 17.3494 30 16.988 30 15.9036C30 14.8193 29.759 14.0964 29.5181 13.494C29.2771 12.8916 28.9157 12.2892 28.3133 11.6867C27.7108 11.0843 27.2289 10.8434 26.506 10.4819C25.9036 10.241 25.1807 10.1205 24.0964 10C23.0121 10 22.7711 10 20 10Z" fill="white"/>
                  <path d="M20 14.8193C17.1084 14.8193 14.8193 17.1084 14.8193 20C14.8193 22.8916 17.1084 25.1807 20 25.1807C22.8916 25.1807 25.1807 22.8916 25.1807 20C25.1807 17.1084 22.8916 14.8193 20 14.8193ZM20 23.3735C18.1928 23.3735 16.6265 21.9277 16.6265 20C16.6265 18.1928 18.0723 16.6265 20 16.6265C21.8072 16.6265 23.3735 18.0723 23.3735 20C23.3735 21.8072 21.8072 23.3735 20 23.3735Z" fill="white"/>
                  <path d="M25.3012 15.9036C25.9666 15.9036 26.506 15.3642 26.506 14.6988C26.506 14.0334 25.9666 13.494 25.3012 13.494C24.6358 13.494 24.0964 14.0334 24.0964 14.6988C24.0964 15.3642 24.6358 15.9036 25.3012 15.9036Z" fill="white"/>
                </svg></Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
