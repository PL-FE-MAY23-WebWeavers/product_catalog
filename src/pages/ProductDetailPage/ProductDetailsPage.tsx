import React, { useEffect, useState } from 'react';
import { PRODUCTS_COLORS, PhoneDetails } from '../../types/PhoneDetails';
import axios from 'axios';
import { BreadCrumbs } from '../../components/BreadCrumbs/BreadCrumbs';
import { ButtonBack } from '../../components/utils/ButtonBack/ButtonBack';
import { ButtonDefault } from '../../components/utils/ButtonDefault/ButtonDefault';
import { ButtonFavs } from '../../components/utils/ButtonFavs/ButtonFavs';
import './productDetailPage.scss';
import { Wrapper } from '../../components/utils/Wrapper/Wrapper';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import cn from 'classnames';

export const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<PhoneDetails | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadError, setIsLoadError] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const id = 'apple-iphone-8-64gb-gold';
  const BASE_URL = 'https://webweavers.onrender.com/';

  const handleImageKeyPress
  = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      setSelectedImageIndex(index);
    }
  };

  const newProductId = productId?.slice(1);

  useEffect(() => {
    if (newProductId) {
      getProductDetails(newProductId);
    }
  }, [newProductId]);

  function getProductDetails(id: string) {
    const BASE_URL = 'https://webweavers.onrender.com/api/products';
    const url = `${BASE_URL}/${id}`;

    axios.get(url)
      .then((response) => {
        const productDetails = response.data;
        setProduct(productDetails);
        setIsLoadError(false);
      })
      .catch(() => {
        setIsLoadError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <section className='product'>
        <Wrapper>
          <BreadCrumbs />
          <div className='product__button-back'>
            <ButtonBack />
          </div>
          {isLoading && <Loader />}

          {product && (
            <div>
              <h2 className='product__title'>{product.name}</h2>

              <div className="product__main">
                <div>
                  <div className="product__photo">
                    <img
                      src={BASE_URL + product?.images[selectedImageIndex]}
                      alt="Product img"
                    />
                  </div>
                  <div className="product__photos">
                    {product?.images.map((img, index) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setSelectedImageIndex(index)}
                        onKeyDown={(e) => handleImageKeyPress(e, index)}
                        className="product__img-button"
                        tabIndex={0}
                      >
                        <img
                          src={BASE_URL + img}
                          alt="Product img"
                          className="product__photos__img"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="product__actions">
                  <div className="product__options">
                    <p className="product__options-title small-text">
                      Available colors
                    </p>

                    <ul className="product__options-list">
                      {product.colorsAvailable.map(colorValue => (
                        <li
                          key={colorValue}
                          className={cn('product__options-color', {
                            'color-option-active': product.color === colorValue,
                          })}
                        >
                          <Link
                            style={{
                              backgroundColor: PRODUCTS_COLORS[colorValue],
                            }}
                            to={`/phones/${product.namespaceId}-${product.capacity.toLowerCase()}-${colorValue}`}
                            className="product__options-color-link"
                          />
                        </li>
                      ))}
                    </ul>
                    <div className='product__line'/>
                  </div>
                </div>

                <div className="product__options">
                  <p className="product__options-title small-text">
                    Select capacity
                  </p>

                  <ul className="product__options-list">
                    {product.capacityAvailable.map(capValue => (
                      <li
                        key={capValue}
                        className={cn(
                          'product__options-cap', {
                            'capacity-option-active': product.capacity === capValue,
                          },
                        )}
                      >
                        <Link
                          to={`/phones/${product.namespaceId}-${capValue.toLowerCase()}-${product.color}`}
                          className="product__options-cap-link"
                        >
                          {capValue}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className='product__line'/>
                </div>

                <div className="product__prices">
                  <h2 className="product__prices-now">
                    {`$${product.priceDiscount}`}
                  </h2>

                  <h2 className="product__prices-before">
                    {`$${product.priceRegular}`}
                  </h2>
                </div>

                <div className="product__info">
                  <div className="product__buttons">
                    <ButtonDefault />
                    <ButtonFavs />
                  </div>

                  <div className="details__data">
                    <p className="details__data-text">Screen</p>
                    <p className="details__data-number">
                      {product?.screen}
                    </p>
                  </div>

                  <div className="details__data">
                    <p className="details__data-text">Resolution</p>
                    <p className="details__data-number">
                      {product?.resolution}
                    </p>
                  </div>

                  <div className="details__data">
                    <p className="details__data-text">Processor</p>
                    <p className="details__data-number">
                      {product?.processor}
                    </p>
                  </div>

                  <div className="details__data">
                    <p className="details__data-text">RAM</p>
                    <p className="details__data-number">
                      {product?.ram}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h2>About</h2>
                <h3>{product.description[0].title}</h3>
                <p>{product.description[0].text}</p>
                <h3>{product.description[1].title}</h3>
                <p>{product.description[1].text}</p>
                <h3>{product.description[2].title}</h3>
                <p>{product.description[2].text}</p>
              </div>
              <div>
                <h2>Tech specs</h2>
                <p>Screen {product.screen}</p>
                <p>Resolution {product.resolution}</p>
                <p>Processor {product.processor}</p>
                <p>RAM {product.ram}</p>
                <p>Build in memory {product.capacity}</p>
                <p>Camera {product.camera}</p>
                <p>Zoom {product.zoom}</p>
                <p>Cell {product.cell}</p>
              </div>
            </div>
          )}

          {/*

          <div className="details__about" data-cy="productDescription">
            <div className="details__description">
              <h2 className="details__header">About</h2>

              <hr className="details__separator" />

              <h3>{product?.description[0].title}</h3>
              <p>{product?.description[0].text}</p>
              <h3>{product?.description[1].title}</h3>
              <p>{product?.description[1].text}</p>
              <h3>{product?.description[2].title}</h3>
              <p>{product?.description[2].text}</p>
            </div>

            <div className="details__tech">
              <h2 className="details__header">Tech specs</h2>

              <hr className="details__separator" />
            </div>
          </div> */}
        </Wrapper>
      </section>
    </>
  );
};

/*
{product && (
            <div>
              <h2>{product.name}</h2>
              <img src={BASE_URL + product.images[0]} />
              <div>
                <p>Available colors: {product.colorsAvailable[0]}</p>
                <p>Select capacity: {product.capacity[0]}</p>
                <p>{product.priceDiscount}</p>
                <p>{product.priceRegular}</p>
                <ButtonDefault />
                <ButtonFavs />
                <p>Screen {product.screen}</p>
                <p>Resolution {product.resolution}</p>
                <p>Processor {product.processor}</p>
                <p>RAM {product.ram}</p>
              </div>
              <div>
                <h2>About</h2>
                <h3>{product.description[0].title}</h3>
                <p>{product.description[0].text}</p>
                <h3>{product.description[1].title}</h3>
                <p>{product.description[1].text}</p>
                <h3>{product.description[2].title}</h3>
                <p>{product.description[2].text}</p>
              </div>
              <div>
                <h2>Tech specs</h2>
                <p>Screen {product.screen}</p>
                <p>Resolution {product.resolution}</p>
                <p>Processor {product.processor}</p>
                <p>RAM {product.ram}</p>
                <p>Build in memory {product.capacity}</p>
                <p>Camera {product.camera}</p>
                <p>Zoom {product.zoom}</p>
                <p>Cell {product.cell}</p>
              </div>
            </div>
          )}
          */
