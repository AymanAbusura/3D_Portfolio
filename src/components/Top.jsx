import { useState, useEffect } from "react";

const Top = () => {
  const [showBtn, setShowBtn] = useState(false);

  const scrollFunction = () => {
    if (window.scrollY > 20) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const topFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={topFunction}
      className={`hover:bg-[#804dee] myBtn ${showBtn ? "show" : "none"}`}
      title="Go to top"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        borderRadius: "50%",
        color: "#fff",
        cursor: "pointer",
        transition: "opacity 0.3s ease",
        opacity: showBtn ? 1 : 0,
        pointerEvents: showBtn ? "auto" : "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <svg
        baseProfile="tiny"
        height="32px"
        width="32px"
        version="1.2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        aria-hidden="true"
        fill="currentColor"
      >
        <g id="Layer_1">
          <path d="M13,5.586l-4.707,4.707c-0.391,0.391-0.391,1.023,0,1.414s1.023,0.391,1.414,0L12,9.414V17c0,0.552,0.447,1,1,1
              s1-0.448,1-1V9.414l2.293,2.293C16.488,11.902,16.744,12,17,12s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L13,5.586z"/>
        </g>
      </svg>
    </button>
  );
};

export default Top;