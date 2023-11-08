import React, { useEffect, useState } from 'react';
import './searchfield.scss';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';

export const SearchField = () => {
  const [input, setInput] = useState<string>('');
  const { setSearch, search } = usePhonesContext();

  useEffect(() => {
    const timeoutId = setTimeout(() => setSearch(input), 400);

    return () => clearTimeout(timeoutId);
  }, [input]);

  console.log(search);
  return (
    <div className="searchfield">
      <div className="searchfield__header small-text">Search</div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="searchfield__box"
        placeholder="Search..."
      />
    </div>
  );
};
