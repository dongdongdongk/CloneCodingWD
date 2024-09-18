import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";
import img from '../../assets/popular1.jpg'
import img2 from '../../assets/popular2.jpg'
import img3 from '../../assets/popular3.jpg'
import img4 from '../../assets/popular4.jpg'
import img5 from '../../assets/popular5.jpg'
import './Popular.scss'

const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Machu Picchu',
        location: 'Peru',
        grade: 'CULTURAL RELAX'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Guanajuato',
        location: 'Mexico',
        grade: 'CULTURAL RELAX'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX'
    }
];

export const Popular = () => {
    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">
                            Popular Destination
                        </h2>
                        <p>
                            From histroycal citieirs to narltuf
                            sperckthr coen set the vest of  the worle!
                        </p>
                    </div>
                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className='icon' />
                        <BsArrowRightShort className='icon' />
                    </div>
                </div>

                <div className="mainContent grid">
                    {
                        Data.map(({ id, imgSrc, destTitle, location, grade }) => {
                            return (
                                <div className="singleDestination">
                                    <div className="destImage">
                                        <img src={imgSrc} alt="Image title" />

                                        <div className="overlayInfo">
                                            <h3>{destTitle}</h3>
                                            <p>
                                                {location}
                                            </p>

                                            <BsArrowRightShort className='icon' />

                                        </div>
                                    </div>

                                    <div className="destFooter">
                                        <div className="number">
                                            0{id}
                                        </div>
                                        <div className="destText flex">
                                            <h6>
                                                {location}
                                            </h6>
                                            <span className="flex">
                                                <span className="dot">
                                                    <BsDot className="icon" />
                                                </span>
                                            </span>
                                        </div>
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
