import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/me.jpg';
import Pagination from '../pagination/Pagination';
const data = [
  {
    avatar: AVTR1,
    name: 'Hani',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius quasi dignissimos non ab architecto ipsum cupiditate minima est unde.',
  },
  {
    avatar: AVTR1,
    name: 'Abdallah',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius quasi dignissimos non ab architecto ipsum cupiditate minima est unde.',
  },
  {
    avatar: AVTR1,
    name: 'Aboda',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius quasi dignissimos non ab architecto ipsum cupiditate minima est unde.',
  },
  {
    avatar: AVTR1,
    name: 'Slim',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius quasi dignissimos non ab architecto ipsum cupiditate minima est unde.',
  },
];

const Testimonials = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const reviewsPerPage = 1;
  const indexOfLastReview = (currentPage + 1) * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = data.slice(indexOfFirstReview, indexOfLastReview);

  
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {
          currentReviews.map(({avatar, name, review}, i) => {
            return (
            <article key={i} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          )})
        }
      </div>
      <Pagination reviewsPerPage={reviewsPerPage} totalReviews={data.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  )
}

export default Testimonials;