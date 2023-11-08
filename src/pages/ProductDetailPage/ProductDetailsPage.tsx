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
          <BreadCrumbs product={product}/>
          <div className='product__button-back'>
            <ButtonBack />
          </div>
          {isLoading && <Loader />}

          {product && (
            <>
              <h2 className='product__title'>{product.name}</h2>
              <div className='grid-global'>
                {/* <div className="product__main"> */}
                {/* <div className='product__main__container'> */}
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
                {/* </div> */}

                <div className='product__right'>
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
                          className={'product__options-cap'}
                        >
                          <Link
                            to={`/phones/${product.namespaceId}-${capValue.toLowerCase()}-${product.color}`}
                            className={cn('product__options-cap-link', {
                              'capacity-option-active': product.capacity === capValue,
                            },
                            )}
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

                    <div className='product__data__container'>
                      <div className="product__data">
                        <p className="product__data-text small-text">Screen</p>
                        <p className="product__data-number small-text">
                          {product?.screen}
                        </p>
                      </div>

                      <div className="product__data">
                        <p className="product__data-text small-text">Resolution</p>
                        <p className="product__data-number small-text">
                          {product?.resolution}
                        </p>
                      </div>

                      <div className="product__data">
                        <p className="product__data-text small-text">Processor</p>
                        <p className="product__data-number small-text">
                          {product?.processor}
                        </p>
                      </div>

                      <div className="product__data">
                        <p className="product__data-text small-text">RAM</p>
                        <p className="product__data-number small-text">
                          {product?.ram}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* </div> */}
                </div>

                <section className='product__more'>
                  <div className='product__more__container'>
                    <h3 className='product__more-title'>
                      About
                    </h3>

                    {product.description.map(item => (
                      <article
                        key={item.title}
                        className="product__more-article"
                      >
                        <h4 className="product__more-article-title">
                          {item.title}
                        </h4>

                        <p className="product__more-article-info">
                          {item.text}
                        </p>
                      </article>
                    ))}
                  </div>

                  <div className='product__more__right'>
                    <h3 className='product__more-title product__more-title-specs'>
                      Tech specs
                    </h3>
                    <div className="product__data">
                      <p className="product__data-text">Screen</p>
                      <p className="product__data-number">
                        {product?.screen}
                      </p>
                    </div>
                    <div className="product__data">
                      <p className="product__data-text">Resolution</p>
                      <p className="product__data-number">
                        {product?.resolution}
                      </p>
                    </div>
                    <div className="product__data">
                      <p className="product__data-text">Processor</p>
                      <p className="product__data-number">
                        {product?.processor}
                      </p>
                    </div>
                    <div className="product__data">
                      <p className="product__data-text">RAM</p>
                      <p className="product__data-number">
                        {product?.ram}
                      </p>
                    </div>
                    <div className="product__data">
                      <p className="product__data-text">Build in memory</p>
                      <p className="product__data-number">
                        {product?.capacity}
                      </p>
                    </div>
                    <div className="product__data">
                      <p className="product__data-text">Camera</p>
                      <p className="product__data-number">
                        {product?.camera}
                      </p>
                    </div>
                    <div className="product__data">
                      <p className="product__data-text">Zoom</p>
                      <p className="product__data-number">
                        {product?.zoom}
                      </p>
                    </div>
                    <div className="product__data">
                      <p className="product__data-text">Cell</p>
                      <p className="product__data-number">
                        {product?.cell.join(', ')}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </>
          )}
        </Wrapper>
      </section>
    </>
  );
};
