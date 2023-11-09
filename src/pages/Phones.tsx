import React from 'react';
import { SingleValue, ActionMeta } from 'react-select';

import { Pagination } from '../components/Pagination/Pagination';
import { usePhonesContext } from '../providers/PhonesProvider/PhonesProvider';
import { Loader } from '../components/Loader/Loader';
import { CardsLayout } from '../components/CardsLayout/CardsLayout';
import { Wrapper } from '../components/utils/Wrapper/Wrapper';
import { BreadCrumbs } from '../components/BreadCrumbs/BreadCrumbs';
import { DropdownMenu } from '../components/DropdownMenu/DropdownMenu';
import { SearchField } from '../components/SearchField/SearchField';
import {
  categoryOptions,
  perPage,
} from '../components/DropdownMenu/dropdownmenuTypes';

import './phones.scss';

export const Phones: React.FC = () => {
  const { phones, isLoading, setOrderBy, setPerPage, targetRef } =
    usePhonesContext();

  const handleSetOrderBy: (
    newValue: SingleValue<{ label: string; value: string }>,
    actionMeta: ActionMeta<{ label: string; value: string }>
  ) => void = (option) => {
    setOrderBy(option?.value as string);
    console.log(option?.value);
  };

  const handlePerPage: (
    newValue: SingleValue<{ label: string; value: string }>,
    actionMeta: ActionMeta<{ label: string; value: string }>
  ) => void = (option) => {
    setPerPage(Number(option?.value) as number);
    console.log(option?.value);
  };

  return (
    <section className="phones">
      <Wrapper>
        <BreadCrumbs />
        <h1 ref={targetRef} className="phones__h1">
          Mobile Phones
        </h1>
        <p className="phones__count p">{phones.count} models</p>
        <section className="phones__filters grid-global">
          <div className="phones__filters-sortby">
            <DropdownMenu
              options={categoryOptions}
              menuName="Sort By"
              defaultValue={{ value: 'newest', label: 'Newest' }}
              handleOption={handleSetOrderBy}
            />
          </div>
          <div className="phones__filters-order">
            <DropdownMenu
              options={perPage}
              menuName="Items on page"
              defaultValue={{ label: '16', value: '16' }}
              handleOption={handlePerPage}
            />
          </div>
          <div className="phones__filters-search">
            <SearchField />
          </div>
        </section>

        {isLoading && <Loader />}
        <div className="phones__grid grid-global">
          <CardsLayout />
          {!isLoading && <Pagination />}
        </div>
      </Wrapper>
    </section>
  );
};
