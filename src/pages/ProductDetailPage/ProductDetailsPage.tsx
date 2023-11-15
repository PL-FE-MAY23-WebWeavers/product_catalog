import React, { useEffect, useState } from 'react';
import { PRODUCTS_COLORS, PhoneDetails } from '../../types/PhoneDetails';
import { Phone } from '../../types/Phones';
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
import { useProductCatalog } from '../../context/ProductCatalogContext';
import { CardsSlider } from '../../components/CardsSlider/CardsSlider';

export const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<PhoneDetails | null>(null);
  const [phone, setPhone] = useState<Phone[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoadError, setIsLoadError] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const {
    favourites,
    removeFromFavourites,
    addToFavourites,
    getItemQuantity,
    increaseCartQuantity,
  } = useProductCatalog();
  const itemQuantity = product ? getItemQuantity(product.id) : 0;

  const BASE_URL = 'https://webweavers-app.onrender.com/';
  const desiredNetworks = ['GSM', 'LTE', 'UMTS'];

  const newProductId = productId?.slice(1);

  useEffect(() => {
    if (newProductId) {
      getProductDetails(newProductId);
      getRecommended(newProductId);
    }
  }, [newProductId]);

  function getProductDetails(id: string) {
    const BASE_URL = 'https://webweavers-app.onrender.com/api/products';
    const url = `${BASE_URL}/${id}`;

    axios
      .get(url)
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

  function getRecommended(id: string) {
    const BASE_URL = 'https://webweavers-app.onrender.com/api/products';
    const url = `${BASE_URL}/${id}/recommended`;

    axios
      .get(url)
      .then((response) => {
        const productPhones = response.data as Phone[];
        setPhone(productPhones);
        console.log(productPhones);
        setIsLoadError(false);
      })
      .catch(() => {
        setIsLoadError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const isFavouritesSelected = product
    ? favourites.some((phone) => phone.id === product.id)
    : false;

  const handleFavouritesToggle = () => {
    if (!product) {
      return;
    }

    const phoneItem = {
      id: product.id,
      itemId: product.id,
      name: product.name,
      price: product.priceDiscount || product.priceRegular,
      priceRegular: product.priceRegular,
      image: product.images[0],
      screen: product.screen,
      capacity: product.capacity,
      ram: product.ram,
    };

    if (isFavouritesSelected) {
      removeFromFavourites(product.id);
    } else {
      addToFavourites(phoneItem);
    }
  };

  const handleAddToCart = () => {
    if (!product) {
      return;
    }

    increaseCartQuantity({
      id: product.id,
      name: product.name,
      price: product.priceDiscount || product.priceRegular,
      image: product.images[0],
      quantity: itemQuantity,
    });
  };

  return (
    <section className="product">
      <Wrapper>
        <BreadCrumbs product={product} />
        <div className="product__button-back">
          <ButtonBack />
        </div>
        {isLoading && <Loader />}

        {product && (
          <>
            <h2 className="product__title">{product.name}</h2>
            <div className="grid-global">
              <div className="product__photo">
                <img
                  src={BASE_URL + product?.images[selectedImageIndex]}
                  alt="Product img"
                />
              </div>
              <div className="product__photos">
                {product?.images.map((img, index) => (
                  <div
                    key={img}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`product__photos-block ${
                      index === selectedImageIndex ? 'selected' : ''
                    }`}
                    tabIndex={0}
                    style={{ backgroundImage: `url(${BASE_URL + img})` }}
                  ></div>
                ))}
              </div>

              <div className="product__right">
                <div className="product__actions">
                  <div className="product__options">
                    <p className="product__options-title small-text">
                      Available colors
                    </p>

                    <ul className="product__options-list">
                      {product.colorsAvailable.map((colorValue) => (
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
                            to={`/phones/:${
                              product.namespaceId
                            }-${product.capacity.toLowerCase()}-${colorValue}`}
                            className="product__options-color-link"
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="product__line" />
                  </div>
                </div>

                <div className="product__options">
                  <p className="product__options-title small-text">
                    Select capacity
                  </p>

                  <ul className="product__options-list">
                    {product.capacityAvailable.map((capValue) => (
                      <li key={capValue} className={'product__options-cap'}>
                        <Link
                          to={`/phones/:${
                            product.namespaceId
                          }-${capValue.toLowerCase()}-${product.color}`}
                          className={cn('product__options-cap-link', {
                            'capacity-option-active':
                              product.capacity === capValue,
                          })}
                        >
                          {capValue}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="product__line" />
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
                    <ButtonDefault
                      handleAddToCart={handleAddToCart}
                      itemQuantity={itemQuantity}
                    />
                    <ButtonFavs
                      handleFavouritesToggle={handleFavouritesToggle}
                      isFavouritesSelected={isFavouritesSelected}
                    />
                  </div>

                  <div className="product__data__container">
                    <div className="product__data">
                      <p className="product__data-text small-text">Screen</p>
                      <p className="product__data-number small-text">
                        {product?.screen}
                      </p>
                    </div>

                    <div className="product__data">
                      <p className="product__data-text small-text">
                        Resolution
                      </p>
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
              </div>

              <section className="product__more">
                <div className="product__more__container">
                  <h3 className="product__more-title">About</h3>

                  {product.description.map((item) => (
                    <article key={item.title} className="product__more-article">
                      <h4 className="product__more-article-title">
                        {item.title}
                      </h4>

                      <p className="product__more-article-info">{item.text}</p>
                    </article>
                  ))}
                </div>

                <div className="product__more__right">
                  <h3 className="product__more-title product__more-title-specs">
                    Tech specs
                  </h3>
                  <div className="product__data">
                    <p className="product__data-text">Screen</p>
                    <p className="product__data-number">{product?.screen}</p>
                  </div>
                  <div className="product__data">
                    <p className="product__data-text">Resolution</p>
                    <p className="product__data-number">
                      {product?.resolution}
                    </p>
                  </div>
                  <div className="product__data">
                    <p className="product__data-text">Processor</p>
                    <p className="product__data-number">{product?.processor}</p>
                  </div>
                  <div className="product__data">
                    <p className="product__data-text">RAM</p>
                    <p className="product__data-number">{product?.ram}</p>
                  </div>
                  <div className="product__data">
                    <p className="product__data-text">Build in memory</p>
                    <p className="product__data-number">{product?.capacity}</p>
                  </div>
                  <div className="product__data">
                    <p className="product__data-text">Camera</p>
                    <p className="product__data-number">{product?.camera}</p>
                  </div>
                  <div className="product__data">
                    <p className="product__data-text">Zoom</p>
                    <p className="product__data-number">{product?.zoom}</p>
                  </div>
                  <div className="product__data">
                    <p className="product__data-text">Cell</p>
                    <p className="product__data-number">
                      {product?.cell
                        .filter((network) => desiredNetworks.includes(network))
                        .join(', ')}
                    </p>
                  </div>
                </div>
              </section>
              <section className="product__like homepage-item__recomend">
                <CardsSlider title="You may also like" items={phone} />
              </section>
            </div>
          </>
        )}
      </Wrapper>
    </section>
  );
};
