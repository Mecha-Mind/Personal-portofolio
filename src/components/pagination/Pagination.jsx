import './pagination.css'

const Pagination = ({ reviewsPerPage, totalReviews, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalReviews / reviewsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number - 1 ? 'active' : ''}`}>
            <a onClick={(e) => { e.preventDefault(); setCurrentPage(number - 1) }} href="!#" className='page-link'>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Pagination;