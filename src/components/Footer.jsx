import { github, linkedin, hh, habr } from "../assets";

const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_GITHUB, "_blank")}>
            <img src={github} alt="github" className="w-1/2 h-1/2 object-contain cursor-pointer" />
          </div>
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_LINKEDIN, "_blank")}>
            <img src={linkedin} alt="linkedin" className="w-1/2 h-1/2 object-contain cursor-pointer" />
          </div>
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_HH, "_blank")}>
            <img src={hh} alt="hh" className="w-1/2 h-1/2 object-contain cursor-pointer" />
          </div>
          <div className="social-icon cursor-pointer" onClick={() => window.open(import.meta.env.VITE_APP_HABR, "_blank")}>
            <img src={habr} alt="habr" className="w-1/2 h-1/2 object-contain cursor-pointer" />
          </div>
        </div>
  
        <p className="text-white-500">© 2024 Ayman Abusura. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;