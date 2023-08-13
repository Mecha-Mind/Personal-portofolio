import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/me.jpg'
import HEGY from '../../assets/HealthyEgy.png'
import ATON from '../../assets/Aton.png'
import TERMIN from '../../assets/Terminaly.png'
import KASPER from '../../assets/kasper.png'
import CRUDS from '../../assets/CRUDS.png'


const data = [
  {
    id: 1,
    image: HEGY,
    title: 'Month-2 project slide deck',
    gitNm: "Youtube Video",
    github: 'https://www.youtube.com/watch?v=5-wy73dHWYE',
    demo: 'https://drive.google.com/file/d/1GYjsv2X9NE2TUEYK7inPObqXwHf_CnSB/view',
  },
  {
    id: 2,
    image: ATON,
    title: 'Aton Landing-Page',
    gitNm: "Github",
    github: 'https://github.com/Mecha-Mind/AtomWeb',
    demo: 'https://mecha-mind.github.io/AtomWeb/'
  },
  {
    id: 3,
    image: TERMIN,
    title: 'Terminaly Website',
    gitNm: "Github",
    github: 'https://github.com/Mecha-Mind/Termenaly',
    demo: 'https://mecha-mind.github.io/Termenaly/'
  },
  {
    id: 4,
    image: KASPER,
    title: 'Kasper Site',
    gitNm: "Github",
    github: 'https://github.com/Mecha-Mind/Kasper',
    demo: 'https://mecha-mind.github.io/Kasper/'
  },
  {
    id: 5,
    image: CRUDS,
    title: 'Cruds-JavaScript',
    gitNm: "Github",
    github: 'https://github.com/Mecha-Mind/Cruds-JavaScript',
    demo: 'https://mecha-mind.github.io/Cruds-JavaScript/'
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Get To Know</h5>
      <h2>My Works</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, title, image, github, demo, gitNm})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__cta">
                  <a href={github} className='btn' target="_blank" rel="noopener noreferrer">{gitNm}</a>
                  <a href={demo} className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio