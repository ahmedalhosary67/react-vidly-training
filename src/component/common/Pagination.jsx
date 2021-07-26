import React from "react";
import _ from "lodash";
import propTypes from "prop-types";

const Pagination = (props) => {
  const { pageSize, itemCount, currentPage, onChange } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;
  // console.log(currentPage);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item' }>
            <span className="page-link" onClick={() => onChange(page)}>{page}</span>
          </li> 
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  pageSize: propTypes.number.isRequired,
  itemCount: propTypes.number.isRequired, 
  currentPage: propTypes.number.isRequired, 
  onChange: propTypes.func.isRequired
}

export default Pagination;
