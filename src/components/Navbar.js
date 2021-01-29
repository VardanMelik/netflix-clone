import React, { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
       window.addEventListener("scroll", () => {
           if (window.scrollY > 100) {
                handleShow(true);
           } else {
               handleShow(false);
           }
       });
       return () => {
           window.removeEventListener("scroll");
       }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                className="nav_logo"
                src="./netflix-logo.png"
                alt="Netflix Logo" 
            />
            <button className="signIn">Sign In</button>            
        </div>
    )
}

export default Navbar
