import React, { useEffect, useState } from 'react';
import { PhoneDetails } from '../../types/PhoneDetail';
import axios from 'axios';

export const ProductDetailsPage = () => {

  const [productDetails, setProductDetails] = useState<PhoneDetails | null>(null);

  const id = 'apple-iphone-8-64gb-gold';

  useEffect(() => {
    getProductDetails(id);
  }, [id]);

  function getProductDetails(id: string) {
    const BASE_URL = 'https://webweavers.onrender.com/api/products';
    const url = `${BASE_URL}/${id}`;

    axios.get(url)
      .then((response) => {
        const productDetails = response.data;
        setProductDetails(productDetails);
      })
      .catch((error) => {
        console.error('Błąd pobierania szczegółów produktu:', error);
      });
  }

  return (
    <>
      {productDetails && (
        <div>
          <h1>{productDetails.name}</h1>
          <p>Opis: {productDetails.priceRegular}</p>
          {/* Dodaj więcej elementów, aby wyświetlić inne szczegóły produktu */}
        </div>
      )}
    </>
  );
};
