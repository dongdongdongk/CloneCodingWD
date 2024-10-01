import React, { useEffect } from 'react'
import img from '../../assets/customer.png'
import img2 from '../../assets/mountain.png'
import img3 from '../../assets/hiking.png'
import video from '../../assets/About.mp4'
import './About.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className='about section'>
      <div className="secContainer">
        <h3 data-aos="fade-right" data-aos-duration="2000" className="title">
          Why Hikings?
        </h3>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img src={img2} alt="Image Name" />

            <h3>100+ Mountains</h3>
            <p>
              Reashenf shows that a cheah to break away from the normasl rhythms of
              daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img src={img3} alt="Image Name" />

            <h3>1000+ Hikings</h3>
            <p>
              Reashenf shows that a cheah to break away from the normasl rhythms of
              daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img src={img} alt="Image Name" />

            <h3>2000+ Customer</h3>
            <p>
              Reashenf shows that a cheah to break away from the normasl rhythms of
              daily life reduces stress and improves health and well-being.
            </p>
          </div>

        </div>

        <div className="videoCard container">
          <div className="cardContent grid">
            <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
              <h2>
                Wonderful House experience ninthere!
              </h2>
              <p>
                the Adventure subranking is based on an equally weighted average of scores from five country
              </p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
              <video src={video} autoPlay loop muted ty></video>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
