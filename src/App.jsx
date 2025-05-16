import { BrowserRouter } from "react-router-dom";

import { GoogleAnalytics, About, Contact, Experience, Certification, Hero, Navbar, Tech, Projects, StarsCanvas, Footer, Top } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <GoogleAnalytics />
        <div className="relative">
          {/* <ParticlesBackground /> */}
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Certification />
        <Tech />
        <Projects />
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