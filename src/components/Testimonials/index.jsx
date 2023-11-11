import React from 'react';
import styles from'./styles.module.css';
import AVTR1 from '../../assets/me.png';
import Pagination from '../Pagination';
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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. unde.',
  },
  {
    avatar: AVTR1,
    name: 'Momen',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius quasi dignissimos non ab  minima est unde.',
  },
  {
    avatar: AVTR1,
    name: 'Magdy',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eius quasi dignissimos non ab architecto ipsum cupiditate minima est undetetur adipisicing elit. Odio eius quasi dignissimos non ab architecto ipsum cupiditate minima est unde.',
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
      <div className={styles["testimonials__container"]}>
        {
          currentReviews.map(({avatar, name, review}, i) => {
            return (
            <article key={i} className={styles["testimonial"]}>
              <div className={styles["client__avatar"]}>
                <img src={avatar} alt={name} />
              </div>
              <h5 className={styles["client__name"]}>{name}</h5>
              <small className={styles["client__review"]}>{review}</small>
            </article>
          )})
        }
      </div>
      <Pagination reviewsPerPage={reviewsPerPage} totalReviews={data.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  )
}

export default Testimonials;