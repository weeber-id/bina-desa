import React from 'react';

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__prev">Prev</div>
      <div className="pagination__numbers">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
      </div>
      <div className="pagination__next">Next</div>
    </div>
  );
};

export default Pagination;
