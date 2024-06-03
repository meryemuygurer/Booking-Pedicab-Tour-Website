import React, { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ tourInfoRef, aboutUsRef, reviewsRef, contactRef }) {
    const navItemList = [
        { name: 'Tour Information', ref: tourInfoRef },
        { name: 'About Us', ref: aboutUsRef },
        { name: 'Reviews', ref: reviewsRef },
        { name: 'Contact', ref: contactRef }
    ];
    const navRef = useRef();
    const unvisibleButton = useRef();

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 0) {
                setIsSticky(true);
                document.querySelectorAll('.nav-span').forEach((el) => {
                    el.classList.add('scrolled');
                });
            } else {
                setIsSticky(false);
                document.querySelectorAll('.nav-span').forEach((el) => {
                    el.classList.remove('scrolled');
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const showNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        navRef.current.classList.remove("responsive_nav"); // close nav menu on item click
    };

    return (
        <div className={isSticky ? 'nav_div sticky' : 'nav_div'}>
            <div className="logo_div">
                <span>LOGO</span>
            </div>
            <ul className="nav_ul" ref={navRef}>
                {navItemList.map((navItem, index) => (
                    <li key={index} onClick={() => scrollToSection(navItem.ref)}>
                        <span className="nav-span">{navItem.name}</span>
                    </li>
                ))}
                <button className="nav_btn nav_close_btn" onClick={showNav}>
                    <FaTimes />
                </button>
            </ul>
            <button className="nav_btn" onClick={showNav} ref={unvisibleButton}>
                <FaBars />
            </button>
        </div>
    );
}

export default Navbar;
