import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.scss';
import { PhoneDetails } from '../../types/PhoneDetails';

type BreadCrumbsProps = {
  product?: PhoneDetails | null;
};

export const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ product }) => {
  const { pathname } = useLocation();
  const caregoryName = pathname.slice(1).split('/')[0];

  return (
    <div className="bread-crumbs">
      <Link to="/" className="bread-crumbs__home-icon" />
      <div className="bread-crumbs__arrow-icon" />

      {!product ? (
        <div className="bread-crumbs__current">{caregoryName}</div>
      ) : (
        <>
          <Link to={`/${caregoryName}`} className="bread-crumbs__link">
            {caregoryName}
          </Link>

          <div className="bread-crumbs__arrow-icon" />

          <div className="bread-crumbs__current truncate-text">
            {product.name}
          </div>
        </>
      )}
    </div>
  );
};

BreadCrumbs.defaultProps = {
  product: null,
};
