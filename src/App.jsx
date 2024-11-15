import { BrowserRouter } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import { useInView } from "react-intersection-observer";

import { About, Contact, Experience, Certification, Hero, Navbar, Tech, Works, 
  StarsCanvas,
  Footer, Top } from './components'

// const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const App = () => {
  // const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

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
        {/* <div className="relative z-0">
          <div ref={ref}>
          <Contact />
            {inView && (
              <Suspense fallback={<div>Loading Stars...</div>}>
                <StarsCanvas />
              </Suspense>
            )}
          </div>
        </div> */}
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