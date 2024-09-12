import "./Reviews.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar } from 'react-icons';
import { reviewsData } from '../../Data'


const Reviews = () => {
  return (
    <serction className="reviews" id='reviews'>
        <div className="section__text">
            <p className="cl-blue">reviews</p>
            <h2>What My Clients Say</h2>
        </div>
        <div className="reviews__container">
            <Carousel></Carousel>
        </div>
    </serction>
  )
}

export default Reviews
