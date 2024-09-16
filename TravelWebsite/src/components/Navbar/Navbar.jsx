import React, { useState } from 'react'
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import './Navbar.scss';

export const Navbar = () => {
    const [active, setActive] = useState('navBar')
    const showNav = () => {
        setActive('navBar activeNavBar')
    }

    const removeNav = () => {
        setActive('navBar')
    }

    return (
        <section className='navBarSection'>
            <div className="header">
                <div className="logoDiv">
                    <a href="#" className="logo">
                        <h1 className="flex"><MdTravelExplore className="icon" />
                            Dot
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Products</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Resources</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">Blog</a>
                        </li>

                        <div className="headerBtns flex">
                            <button className="btn loginBtn">
                                <a href="#">Login</a>
                            </button>
                            <button className="btn">
                                <a href="#">Sing up</a>
                            </button>
                        </div>
                    </ul>
                    <div onClick={removeNav} className="closeNavBar">
                        <AiFillCloseCircle className="icon" />
                    </div>

                </div>
                    <div onClick={showNav} className="toggleNavBar">
                        <TbGridDots className="icon" />
                    </div>
            </div>
        </section>
    )
}
