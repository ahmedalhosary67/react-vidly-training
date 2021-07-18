import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { pageSize, itemCount, currentPage } = props;
  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link" onClick={(page) => props.onChange(page)}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
