import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import  { useState } from "react";
import { useEffect } from "react";
import BookingButton from "./BookingButton";

function Navbar() {
    const navItemList = ['home', 'references', 'services'];
    const navRef = useRef();
    const unvisibleButton = useRef();

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0){
                setIsSticky(true);
                document.querySelectorAll('.nav-span').forEach((el) => {
                    el.classList.add('scrolled');
                });
            }else {
                setIsSticky(false);
                document.querySelectorAll('.nav-span').forEach((el) => {
                    el.classList.remove('scrolled');
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
        
    }
    return(
        <div className={ isSticky ? 'nav_div sticky' : 'nav_div' }>
            <div className="logo_div">
                <span>LOGO</span>
            </div>
            <ul className= "nav_ul" ref={navRef}>
                {navItemList.map((navItem, index) => (
                    <li className={`nav_${navItem}`} key={index}> <span className="nav-span"> {navItem} </span> </li>
                ))}
                <BookingButton/>
                <button className="nav_btn nav_close_btn" onClick={showNav}>
                    <FaTimes/>
                </button>
            </ul> 
            <button className="nav_btn" onClick={showNav} ref={unvisibleButton} >
                <FaBars/>
            </button>
            
        </div> 
    )
}

export default Navbar;