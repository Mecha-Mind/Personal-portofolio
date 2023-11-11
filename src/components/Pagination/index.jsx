import styles from'./styles.module.css';


const Pagination = ({ reviewsPerPage, totalReviews, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={`${styles["page-item"]} ${currentPage === number - 1 ? styles.active : ''}`}>
            <a onClick={(e) => { e.preventDefault(); setCurrentPage(number - 1) }} href="!#" className={styles['page-link']}>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;