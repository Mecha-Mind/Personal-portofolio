import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/me.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio Dashboard',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Portfolio Dashboard',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 3,
    image: IMG1,
    title: 'Portfolio Dashboard',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 4,
    image: IMG1,
    title: 'Portfolio Dashboard',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 5,
    image: IMG1,
    title: 'Portfolio Dashboard',
    github: 'https://github.com',
    demo: '#'
  },
  {
    id: 6,
    image: IMG1,
    title: 'Portfolio Dashboard',
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
          data.map(({id, title, image, github, demo})=>{
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__cta">
                  <a href={github} className='btn' target="_blank" rel="noopener noreferrer">Github</a>
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