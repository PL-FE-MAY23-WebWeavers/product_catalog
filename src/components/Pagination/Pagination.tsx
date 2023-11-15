import React from 'react';
import './pagination.scss';
import cn from 'classnames';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';

export const Pagination = () => {
  const { page, setPage, perPage, phones, targetRef } = usePhonesContext();

  const items = phones.count;
  const pages = Math.ceil(items / perPage);
  const pageNums = [];

  for (let i = 1; i <= pages; i++) {
    pageNums.push(i);
  }

  const handleClick = (num: number) => () => {
    setPage(num);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleForwardClick = () => {
    setPage((prev) => prev + 1);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBackClick = () => {
    setPage((prev) => prev - 1);
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="pagination pagination--offset">
      <div className="pagination__set">
        <button
          type="button"
          className={cn('pagination__box', 'pagination__arrow-left', {
            'pagination__arrow-left--disabled': page === 1,
          })}
          onClick={handleBackClick}
          disabled={page === 1}
          aria-label="Previous Page"
        />
        {pageNums.map((num) => (
          <button
            type="button"
            className={cn('pagination__box', {
              'pagination__box--active': num === page,
            })}
            key={num}
            onClick={handleClick(num)}
            aria-label={`Go to Page ${num}`}
          >
            {num}
          </button>
        ))}
        <button
          type="button"
          className={cn('pagination__box', 'pagination__arrow-right', {
            'pagination__arrow-right--disabled': page === pageNums.length,
          })}
          onClick={handleForwardClick}
          disabled={page === pageNums.length}
          aria-label="Next Page"
        />
      </div>
    </div>
  );
};
