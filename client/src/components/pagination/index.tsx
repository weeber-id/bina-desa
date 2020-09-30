import React, { useState } from 'react';

const Pagination = () => {
  const maxPage = 15;
  const elements = [];
  const [currentPage, setCurrentPage] = useState<number>(1);

  for (let i = currentPage; i <= maxPage; i++) {
    const className = ['pagination__number'];
    if (i === currentPage) className.push('active');
    elements.push(
      <span
        key={`pagination-${i}`}
        onClick={() => setCurrentPage(i)}
        className={className.join(' ')}
      >
        {i}
      </span>
    );
  }

  if (currentPage > 1) {
    for (let i = currentPage - 1; i > currentPage - 5; i--) {
      if (i > 0)
        elements.unshift(
          <span
            key={`pagination-${i}`}
            onClick={() => setCurrentPage(i)}
            className="pagination__number"
          >
            {i}
          </span>
        );
    }
  }

  while (elements.length > 10) {
    elements.pop();
  }

  if (elements.length < 10) {
    for (let i = currentPage - 5; elements.length < 10; i--) {
      if (i > 0)
        elements.unshift(
          <span
            key={`pagination-${i}`}
            onClick={() => setCurrentPage(i)}
            className="pagination__number"
          >
            {i}
          </span>
        );
    }
  }

  const onNext = (i: number) => {
    if (i <= maxPage) setCurrentPage(i);
  };

  const onPrev = (i: number) => {
    if (i > 0) setCurrentPage(i);
  };

  return (
    <div className="pagination">
      <div onClick={() => onPrev(currentPage - 1)} className="pagination__prev">
        Prev
      </div>
      <div className="pagination__numbers">{elements}</div>
      <div onClick={() => onNext(currentPage + 1)} className="pagination__next">
        Next
      </div>
    </div>
  );
};

export default Pagination;
