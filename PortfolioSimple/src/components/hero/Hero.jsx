import './Hero.scss'
import Img from "../../assets/hero.png"
import {
    FaTwitter,
    FaInstagram,
    FaFacebookSquare,
    FaRegEnvelope,
    FaFacebook,
} from "react-icons/fa"

const Hero = () => {
  return (
    <section className='hero' id='hero'>
        <div className='hero__container wrapper'>
            <div className='hero__left'>
                <img src={Img} alt=''/>
            </div>
            <div className="hero_right">
                <p className="cl-blue hero_blue">hello, i am</p>
                <h1>Merida Swan</h1>
                <span>UI/UX & WEB DESIGNER</span>
                <p className="hero__info">
                    Suspendisse venenatis lucus metus eget non venenatis. nulla vestibulum
                </p>
                <a href="#services" className="btn">
                    <FaRegEnvelope /> Services
                </a>

                <div className="hero__stats">
                    <div>
                        <h4>457</h4>
                        <p>Happy Customers</p>
                    </div>
                    <div>
                        <h4>4133</h4>
                        <p>HProjects Completed</p>
                    </div>
                    <div>
                        <h4>3423</h4>
                        <p>Awards Won</p>
                    </div>
                    <div className="hero__icons">
                        <a href='#'>
                            <FaTwitter />
                        </a>
                        <a href='#'>
                            <FaFacebook />
                        </a>
                        <a href='#'>
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
