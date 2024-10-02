import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Certification, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import Footer from "./components/Footer"

// import { Hero, Navbar } from './components'


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Certification />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          {/* <Footer /> */}
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App