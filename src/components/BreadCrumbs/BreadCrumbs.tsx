import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './BreadCrumbs.scss';
import { PhoneDetails } from '../../types/phoneDetail';

type Props = {
  product?: PhoneDetails | null,
};

export const BreadCrumbs: React.FC<Props> = ({ product }) => {
  const { pathname } = useLocation();
  const caregoryName = pathname.slice(1).split('/')[0];

  return (
    <div className="bread-crumbs">
      <Link to="/" className="bread-crumbs__link-home">
        <div className="" />
      </Link>

      <div className="" />

      {!product ? (
        <span className="bread-crumbs__current">
          {caregoryName}
        </span>
      ) : (
        <>
          <Link to={`/${caregoryName}`} className="bread-crumbs__link">
            {caregoryName}
          </Link>

          <div className="" />

          <span className="bread-crumbs__current">
            {product.name}
          </span>
        </>
      )}
    </div>
  );
};

BreadCrumbs.defaultProps = {
  product: null,
};
