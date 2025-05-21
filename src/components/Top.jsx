import { useState, useEffect } from "react";
import { FaArrowUp } from 'react-icons/fa';

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

        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
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
            className={`hover:bg-[#804dee] myBtn ${showBtn ? "show" : "none"} `}
            title="Go to top"
            style={{
                position: "fixed",
                bottom: "20px",
                right: "20px",
                padding: "10px",
                borderRadius: "50%",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.3s ease",
                opacity: showBtn ? 1 : 0,
                pointerEvents: showBtn ? "auto" : "none",
            }}
        >
            <FaArrowUp
                size={20} 
            />
        </button>
    );
};

export default Top;