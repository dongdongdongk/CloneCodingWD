import "./Services.scss";
import { FiEdit } from "react-icons/fi";
import { BsWindowStack, BsPcDisplay, BsStars } from "react-icons/bs"

const Services = () => {
  return (
    <section className="services" id="services">
        <div className="section__text">
            <p className="cl-blue">services</p>
            <h2>What I Do</h2>
        </div>

        <div className="services__container wrapper">
            <div className="services__card">
                <BsStars />
                <h6>Branding</h6>
            </div>
            <div className="services__card">
                <FiEdit />
                <h6>UI/UX Design</h6>
            </div>
            <div className="services__card">
                <BsWindowStack />
                <h6>Web Design</h6>
            </div>
            <div className="services__card">
                <BsPcDisplay />
                <h6>Web Development</h6>
            </div>
        </div>
    </section>
  )
}

export default Services
