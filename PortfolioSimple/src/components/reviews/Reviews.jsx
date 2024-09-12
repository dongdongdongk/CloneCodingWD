import "./Reviews.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar } from 'react-icons/ai';
import { reviewsData } from '../../Data'


const Reviews = () => {
  return (
    <section className="reviews" id='reviews'>
      <div className="section__text">
        <p className="cl-blue">reviews</p>
        <h2>What My Clients Say</h2>
      </div>
      <div className="reviews__container">
        <Carousel
          showArrows={false}
          showStatus={false}
          autoPlay={true}
          emulateTouch={true}
        >
          {reviewsData.map(({ name, img, company, des }) => (
            <div className="reviews__card" key={name}>
              <div className="reviews__card-img">
                <img src={img} alt={name} />
              </div>
              <div className="reviews__icons">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>{des}</p>
              <h6>{name}</h6>
              <span>{company}</span>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Reviews
