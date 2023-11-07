import React, { useState } from 'react';
import './dropdownmenu.scss';
import { usePhonesContext } from '../../providers/PhonesProvider/PhonesProvider';

type DropdownMenuProps = {
  items: string[];
  menuName: string;
  defaultValue: string;
};

export const DropdownMenu = ({
  items,
  menuName,
  defaultValue,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // const [sortBy, setSortBy] = useState<string>(defaultValue);

  const { orderBy, setOrderBy } = usePhonesContext();
  setOrderBy(defaultValue);
  return (
    <div className="dropdown homepage-dropdown">
      <div className="dropdown__title small-text">{menuName}</div>
      <div
        className="dropdown__header button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div>{orderBy}</div>
        <div className="arrow-down" />
      </div>
      {isOpen && (
        <div className="dropdown__menu button">
          {items.map((item) => (
            <div
              onClick={() => {
                setOrderBy(item);
                setTimeout(() => setIsOpen(false), 100);
              }}
              className="dropdown__menu-item"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
