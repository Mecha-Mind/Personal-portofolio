import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/me.jpg'
import HEgy from '../../assets/HealthyEgy.png'

const data = [
  {
    id: 1,
    image: HEgy,
    title: 'Month-2 project slide deck',
    gitNm: "Youtube Video",
    github: 'https://www.youtube.com/watch?v=5-wy73dHWYE',
    demo: 'https://drive.google.com/file/d/1GYjsv2X9NE2TUEYK7inPObqXwHf_CnSB/view',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Portfolio Dashboard',
    gitNm: "Github",
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Portfolio Dashboard',
    gitNm: "Github",
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Portfolio Dashboard',
    gitNm: "Github",
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Portfolio Dashboard',
    gitNm: "Github",
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Portfolio Dashboard',
    gitNm: "Github",
    github: 'https://github.com',
    demo: '#'
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