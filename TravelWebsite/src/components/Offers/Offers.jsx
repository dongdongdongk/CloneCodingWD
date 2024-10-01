import React, { useEffect } from 'react'
import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import img from '../../assets/Offers.jpg';
import img1 from '../../assets/Offers1.jpg';
import img2 from '../../assets/Offers2.jpg';
import './Offers.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Offer = [
  {
    id: 1,
    imgSrc: img,
    stTdeitle: 'Machu Picchu',
    location: 'Peru',
    price: '$6,432'
  },
  {
    id: 2,
    imgSrc: img1,
    stTdeitle: 'Guanajuato',
    location: 'Mexico',
    price: '$4,642'
  },
  {
    id: 3,
    imgSrc: img2,
    stTdeitle: 'Angkor Wat',
    location: 'Cambodia',
    price: '$1,222'
  }
];

export const Offers = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">
          {/* <div className="singleOffer">
            <div className="destImage">
              <img src={img} alt="Image Name" />
              <span className="discount">
                30% Off
              </span>
            </div>

            <div className="offerBody">
              <div className="price flex">
                <h4>
                  $1000
                </h4>
                <span className="status">
                  For Rent
                </span>
              </div>
              <div className="amenities flex">
                <div className="singleAmenity flex">
                  <MdKingBed className='icon' />
                  <small>2 Beds</small>
                </div>
                <div className="singleAmenity flex">
                  <MdBathtub className='icon' />
                  <small>1 Bath</small>
                </div>
                <div className="singleAmenity flex">
                  <FaWifi className='icon' />
                  <small>Wi - FI</small>
                </div>
                <div className="singleAmenity flex">
                  <MdAirportShuttle className='icon' />
                  <small>Shuttle</small>
                </div>
              </div>
              <div className="location">
                <MdLocationOn className='icon' />
                <small>450 Vine #310, London</small>
              </div>

              <button className='btn flex'>
                View Details
                <BsArrowRightShort className='icon' />
              </button>
            </div>


          </div> */}
          {
            Offer.map(({ id, imgSrc, stTdeitle, location, price }) => {
              return (
                <div data-aos="fade-right" data-aos-duration="3000" className="singleOffer">
                  <div className="destImage">
                    <img src={imgSrc} alt={stTdeitle} />
                    <span className="discount">
                      30% Off
                    </span>
                  </div>

                  <div className="offerBody">
                    <div className="price flex">
                      <h4>
                        {price}
                      </h4>
                      <span className="status">
                        For Rent
                      </span>
                    </div>
                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className='icon' />
                        <small>2 Beds</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdBathtub className='icon' />
                        <small>1 Bath</small>
                      </div>
                      <div className="singleAmenity flex">
                        <FaWifi className='icon' />
                        <small>Wi - FI</small>
                      </div>
                      <div className="singleAmenity flex">
                        <MdAirportShuttle className='icon' />
                        <small>Shuttle</small>
                      </div>
                    </div>
                    <div className="location">
                      <MdLocationOn className='icon' />
                      <small>450 Vine #310, {location}</small>
                    </div>

                    <button className='btn flex'>
                      View Details
                      <BsArrowRightShort className='icon' />
                    </button>
                  </div>


                </div>
              )
            })
          }

        </div>
      </div>
    </section>
  )
}
