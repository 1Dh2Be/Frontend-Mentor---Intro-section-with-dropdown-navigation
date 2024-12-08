import './App.css'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [openFeatures, isOpenFeatures] = useState(false);
  const [openCompany, isOpenCompany] = useState(false);


  return (
    <>
      <header className='header'>
          <nav className='header__nav container'>
            <div className='header__logo'>
                <img src="src/assets/images/logo.svg" alt="brand logo" />
            </div>

            <div className='header__menu-toggle' onClick={() => setIsOpen(!isOpen)}>
              <RxHamburgerMenu size="28px"/>
            </div>

            <div className={`nav__menu ${isOpen ? "is-open" : ""}`}>
              <div className='nav__close' onClick={() => setIsOpen(false)}>
                {isOpen ? (<IoClose size="40px"/>) : ''}
              </div>

              <ul className='nav__list'>
                <li className='nav__item nav__dropdown' onClick={() => isOpenFeatures(!openFeatures)}>
                  <div className='nav__dropdown-header hover'>
                    <a href="#" className='nav__link'>Features</a>
                    <RiArrowDropDownLine
                      className={`arrow__features ${openFeatures ? "show" : ""}`}
                      size="30px"
                    />
                  </div>

                  {openFeatures && (
                    <ul className="features-dropdown">
                      <li className="nav__dropdown-item hover">
                        <img className='nav__dropdown-img' src="src/assets/images/icon-todo.svg" alt="todo icon" />
                        <a href="#" className="nav__link">Todo List</a>
                      </li>

                      <li className="nav__dropdown-item hover">
                        <img className='nav__dropdown-img' src="src/assets/images/icon-calendar.svg" alt="calendar icon" />
                        <a href="#" className="nav__link">Calendar</a>
                      </li>

                      <li className="nav__dropdown-item hover">
                        <img className='nav__dropdown-img' src="src/assets/images/icon-reminders.svg" alt="reminder icon" />
                        <a href="#" className="nav__link">Reminders</a>
                      </li>

                      <li className="nav__dropdown-item hover">
                        <img className='nav__dropdown-img' src="src/assets/images/icon-planning.svg" alt="planning icon" />
                        <a href="#" className="nav__link">Planning</a>
                      </li>
                  </ul>
                )}
                </li>

                <li className='nav__item nav__dropdown' onClick={() => isOpenCompany(!openCompany)}>
                  <div className='nav__dropdown-header hover'>
                    <a href="#">Company</a>
                      <RiArrowDropDownLine
                        className={`arrow__features ${openCompany ? "show" : ""}`}
                        size="30px"
                    />
                  </div>
                {openCompany && (
                  <ul className='features-dropdown'>
                    <li><a className='hover' href="#">History</a></li>
                    <li><a className='hover' href="#">Our Team</a></li>
                    <li><a className='hover' href="#">Blog</a></li>
                  </ul>
                )}
                </li>

                <li className="nav__item">
                  <a href="#" className="nav__link hover">Careers</a>
                </li>

                <li className="nav__item">
                  <a href="#" className="nav__link hover">About</a>
                </li>
              </ul>

              <div className='auth-links'>
                <a className='hover' href="#">Login</a>
                <a className='register__btn hover' href="#">Register</a>
              </div>

            </div>
          </nav>
      </header>

      <main className='main container'>

          <section className='hero__img'>
              <div className='hero__img-div'>
                <img className='hero__img-desktop' src="src/assets/images/image-hero-desktop.png" alt="hero image desktop" />
                <img className='hero__img-mobile' src="src/assets/images/image-hero-mobile.png" alt="hero image mobile" />
              </div>
          </section>

          <section className='hero'>
            <div className='hero__content'>
                <h1 className='hero__content-h1'>Make remote work</h1>
                <p className='hero__content-p'>
                  Get your team in sync, no matter your location.
                  Streamline processes, create team rituals, and
                  watch productivity soar.
                </p>
                <button className='learn__more--btn'>Learn More</button>
                <div className='partners'>
                  <img src="src/assets/images/client-databiz.svg" alt="partner logo databiz" />
                  <img src="src/assets/images/client-audiophile.svg" alt="partner logo audiophile" />
                  <img src="src/assets/images/client-meet.svg" alt="partner image meet" />
                  <img src="src/assets/images/client-maker.svg" alt="partner image maker" />
                </div>
            </div>
          </section>
      </main>
    </>
  )
}

export default App
