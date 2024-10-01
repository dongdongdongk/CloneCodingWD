import React, { useEffect } from 'react'
import './Blog.scss';
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../assets/blog1.jpg'
import img2 from '../../assets/blog2.jpg'
import img3 from '../../assets/blog3.jpg'
import img4 from '../../assets/blog4.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Post = [
  {
    id: 1,
    postImage: img1,
    title: 'Lorem ipsum dolor sit amet',
    desc: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa'
  },
  {
    id: 2,
    postImage: img2,
    title: 'Lorem ipsum dolor sit amet',
    desc: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Lorem ipsum dolor sit amet',
    desc: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. '
  },
  {
    id: 4,
    postImage: img4,
    title: 'Lorem ipsum dolor sit amet',
    desc: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. '
  }
]

export const Blog = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            an insight to the incredible experince in the world
          </p>
        </div>
        <div className="mainContainer grid">
          {
            Post.map(({ id, postImage, title, desc }) => {
              return (
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt='Image Name' />
                  </div>
                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">
                      {title}
                    </h3>
                    <p data-aos="fade-up" data-aos-duration="4000">
                      {desc}
                    </p>
                  </div>

                  <a href='#' className='flex' data-aos="fade-up" data-aos-duration="4500">
                    Read More
                    <BsArrowRightShort className='icon' />
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>

    </section>
  )
}
