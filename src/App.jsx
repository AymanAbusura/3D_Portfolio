import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { Suspense, useEffect, lazy } from "react";
import { useTranslation } from "react-i18next";

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

const Loader = () => (
  <div className="text-center text-white p-4">
    <p>Loading...</p>
  </div>
);

function Page() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang.toUpperCase());
    }
  }, [lang, i18n]);

  return (
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
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang" element={<Page />} />
    </Routes>
  );
}
