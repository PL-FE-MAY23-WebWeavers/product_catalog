import React, { useState } from 'react';
import './dropdownmenu.scss';
import { SortBy } from '../../pages/Phones';

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
  const [sortBy, setSortBy] = useState<string>(defaultValue);
  return (
    <div className="dropdown homepage-dropdown">
      <div className="dropdown__title small-text">{menuName}</div>
      <div className="dropdown__menu button">
        <div>{sortBy}</div>
        <div
          className="arrow-down"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
    </div>
  );
};
