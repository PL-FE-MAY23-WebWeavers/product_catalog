import React, { useEffect, useState } from 'react';
import './searchfield.scss';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';
import cn from 'classnames';

export const SearchField = () => {
  const [input, setInput] = useState<string>('');
  const { setSearch, setPage } = usePhonesContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearch(input);
      setPage(1);
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [input]);

  return (
    <div className="searchfield">
      <div className="searchfield__header small-text">Search</div>
      <div className="searchfield__container">
        <input
          id="search"
          className="searchfield__box"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <div
          onClick={() => setInput('')}
          className={cn({
            'searchfield__box-close-icon--hidden': input.length === 0,
            'searchfield__box-close-icon': input.length > 0,
          })}
        ></div>
      </div>
    </div>
  );
};
