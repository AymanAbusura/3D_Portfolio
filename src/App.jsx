// import { BrowserRouter } from "react-router-dom";

// import { About, Contact, Experience, Certification, Hero, Navbar, Tech, Projects, StarsCanvas, Footer, Top } from './components'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="relative">
//           <Navbar />
//           <Hero />
//         </div>
//         <About />
//         <Experience />
//         <Certification />
//         <Tech />
//         <Projects />
//         <div className="relative z-0">
//           <Contact />
//           <StarsCanvas />
//         </div>
//         <Footer />
//         <Top />
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

// Lazy load components
const Hero = lazy(() => import("./components/Hero"));
const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Tech = lazy(() => import("./components/Tech"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Certification = lazy(() => import("./components/Certification"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
const Footer = lazy(() => import("./components/Footer"));
const Top = lazy(() => import("./components/Top"));

// Optional: A fallback loader component
const Loader = () => (
  <div className="text-center text-white p-4">
    <p>Loading...</p>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="relative">
            <Navbar />
            <Hero />
          </div>
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        </div>
    </BrowserRouter>
  );
};

export default App;
