import React from 'react'
import './footer.scss'
import { MdTravelExplore } from "react-icons/md";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";


export const Footer = () => {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="" className="logo flex">
              <h1 className='flex'><MdTravelExplore className="icon" />
                Dot</h1>
            </a>
          </div>

          <div className="socials flex">
            <ImFacebook className='icon' />
            <BsTwitter className='icon' />
            <AiFillInstagram className='icon' />
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>


        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className="phone">+444 555 4444</span>
          <span className="email">fjg9403@fnag.com</span>
        </div>



      </div>
    </div>
  )
}
