import "./Navbar.scss"
import { useState } from "react"
import Logo from "../../assets/logo.png"
import { PiEnvelopeOpen } from 'react-icons/pi'
import { FaBars } from "react-icons/fa"

export const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <nav className="navbar">
            <div className="navbar__container wrapper">
                <a href="#hero" className="navbar__logo" onClick={() => setShowNav(false)}>
                    <img src={Logo} alt="" />
                </a>

                <ul className={`navbar__links ${showNav ? 'display' : ''}`}>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#hero">Home</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#services">Services</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li onClick={() => setShowNav(false)}>
                        <a href="#reviews">Reviews</a>
                    </li>
                </ul>
                <a href="#contact" className="navbar__btn btn">
                    <PiEnvelopeOpen /> Contact
                </a>

                <div className={`navbar__menu ${showNav ? "bg-color" : ""}`} onClick={() => setShowNav(!showNav)}>
                    <FaBars />
                </div>
            </div>
        </nav>
    )
}
