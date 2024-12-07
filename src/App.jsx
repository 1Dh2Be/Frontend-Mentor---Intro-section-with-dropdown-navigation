import './App.css'

function App() {

  return (
    <>
      <header>
          <nav>
            <div className='logo'>
                <img src="src/assets/images/logo.svg" alt="brand logo" />
            </div>
            <div className='nav-links'>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="Careers"></a></li>
                <li><a href="#">About</a></li>
              </ul>
              <div className='auth-links'>
                <a href="#">Login</a>
                <a href="#">Register</a>
              </div>
            </div>
          </nav>
      </header>

      <main>
          <section className='hero'>
            <div className='hero__content'>
                <h1>Make <br/> remote work</h1>
                <p>
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

          <section className='hero__img'>
              <div>
                <img src="src/assets/images/image-hero-desktop.png" alt="hero image desktop" />
                <img src="src/assets/images/image-hero-mobile.png" alt="hero image mobile" />
              </div>
          </section>
      </main>
    </>
  )
}

export default App
