import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Certification, ParticlesBackground, Hero, Navbar, Tech, Works, StarsCanvas, Footer, Top } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative">
          <ParticlesBackground />
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
        </div>
        <Footer />
        <Top />
      </div>
    </BrowserRouter>
  )
}

export default App