import React from 'react';
import './pagination.scss';
import cn from 'classnames';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';

export const Pagination = () => {
//   const [perPage, setPerPage] = useState<number>(16);
//   const [page, setPage] = useState<number>(1);
  const { page, setPage, perPage } = usePhonesContext();

  const items = 71;
  const pages = Math.ceil(items / perPage);
  const pageNums = [];

  for (let i = 1; i <= pages; i++) {
    pageNums.push(i);
  }

  const handleClick = (num: number)  => () => {
    setPage(num);
  };

  const handleForwardClick = () => {
    setPage(prev => prev + 1);
  };

  const handleBackClick = () => {
    setPage(prev => prev - 1);
  };

  return (
    <div className='pagination'>
      <div className="pagination__set">
        <button type="button" className={cn('pagination__box', {
          'pagination__box--disabled': page === 1
        })} onClick={handleBackClick} disabled={page === 1}>
          <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path className={cn({
              'pagination__box-arrow--disabled': page === 1
            })} fillRule="evenodd" clipRule="evenodd" d="M10.4712 3.52876C10.2109 3.26841 9.78878 3.26841 9.52843 3.52876L5.52843 7.52876C5.26808 7.78911 5.26808 8.21122 5.52843 8.47157L9.52843 12.4716C9.78878 12.7319 10.2109 12.7319 10.4712 12.4716C10.7316 12.2112 10.7316 11.7891 10.4712 11.5288L6.94265 8.00016L10.4712 4.47157C10.7316 4.21122 10.7316 3.78911 10.4712 3.52876Z" fill="#313237"/>
          </svg>
        </button>
        {pageNums.map(num => (
          <button type='button' className={cn('pagination__box', {
            'pagination__box--active': num === page
          })} key={num} onClick={handleClick(num)}>{num}</button>
        ))}
        <button type='button' className={cn('pagination__box', {
          'pagination__box--disabled': page === pageNums.length
        })} onClick={handleForwardClick} disabled={page === pageNums.length}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path className={cn({
              'pagination__box-arrow--disabled': page === pageNums.length
            })} fillRule="evenodd" clipRule="evenodd" d="M5.52876 3.52876C5.78911 3.26841 6.21122 3.26841 6.47157 3.52876L10.4716 7.52876C10.7319 7.78911 10.7319 8.21122 10.4716 8.47157L6.47157 12.4716C6.21122 12.7319 5.78911 12.7319 5.52876 12.4716C5.26841 12.2112 5.26841 11.7891 5.52876 11.5288L9.05735 8.00016L5.52876 4.47157C5.26841 4.21122 5.26841 3.78911 5.52876 3.52876Z" fill="#313237"/>
          </svg>
        </button>
      </div>
    </div>
  );
};
