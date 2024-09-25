import React from 'react'
import './Blog.scss';
import { BsArrowRightShort } from 'react-icons/bs'
import img1 from '../../assets/blog1.jpg'
import img2 from '../../assets/blog2.jpg'
import img3 from '../../assets/blog3.jpg'
import img4 from '../../assets/blog4.jpg'

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
    desc: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Lorem ipsum dolor sit amet',
    desc: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa'
  }
]

export const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p>
            an insight to the incredible experince in the world
          </p>
        </div>
        <div className="mainContainer grid">
          {
            Post.map(({ id, postImage, title, desc }) => {
              return (
                <div className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt='Image Name' />
                  </div>
                  <div className="postDetails">
                    <h3>
                      {title}
                    </h3>
                    <p>
                      {desc}
                    </p>
                  </div>

                  <a href='#' className='flex'>
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
