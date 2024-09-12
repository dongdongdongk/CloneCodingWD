import "./Portfolio.scss"
import { portfolioData } from "../../Data"
const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <div className="section__text">
        <p className="cl-blue">portfolio</p>
        <h2>Latest Work</h2>
      </div>

      <div className="portfolio__container wrapper">
        {portfolioData.map(({name, des, img}) => (
          <div className="portfolio__card" key={name}>
            <img src={img} alt={name} />
            <div className="portfolio__text">
              <h6>{name}</h6>
              <p>{des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
