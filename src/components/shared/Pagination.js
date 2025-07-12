import React from 'react';
import './Pagination.css';

const Pagination = ({ totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <button>{'<'}</button>
      {pages.map((page) => (
        <button key={page}>{page}</button>
      ))}
      <button>{'>'}</button>
    </div>
  );
};

export default Pagination;
