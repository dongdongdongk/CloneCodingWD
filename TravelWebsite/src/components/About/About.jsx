import img from '../../assets/customer.png'
import img2 from '../../assets/mountain.png'
import img3 from '../../assets/hiking.png'
import './About.scss'

export const About = () => {
  return (
    <section className='about section'>
      <div className="secContainer">
        <h3 className="title">
          Why Hikings?
        </h3>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img2} alt="Image Name" />

            <h3>100+ Mountains</h3>
            <p>
              Reashenf shows that a cheah to break away from the normasl rhythms of
              daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div className="singleItem">
            <img src={img3} alt="Image Name" />

            <h3>1000+ Hikings</h3>
            <p>
              Reashenf shows that a cheah to break away from the normasl rhythms of
              daily life reduces stress and improves health and well-being.
            </p>
          </div>
          <div className="singleItem">
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
            <div className="cardText">
              <h2>
                Wonderful House experience ninthere!
              </h2>
              <p>
                the Adventure subranking is based on an equally weighted average of scores from five country
              </p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted ty></video>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
