import React from 'react';
import { Categories } from '../components/Categories/Categories';
import { Slider } from '../components/Slider/Slider';
import { CardsSlider } from '../components/CardsSlider/CardsSlider';
import { useDiscountProducts } from '../hooks/useDiscountProducts';
import { useNewProducts } from '../hooks/useNewProducts';

export const Home = () => {
  const { newProducts } = useNewProducts();
  const { discountProducts } = useDiscountProducts();
  return (
    <div className="grid-container">
      <div className="grid-global">
        <h1 className="homepage-item__h1">Welcome to Nice Gadgets store!</h1>

        <section className="homepage-item__slider">
          <Slider />
        </section>

        <section className="homepage-item__section homepage-item__recomend">
          <CardsSlider title="Brand new models" items={newProducts} />
        </section>

        <section className="homepage-item__section section__category">
          <Categories />
        </section>

        <section className="homepage-item__section homepage-item__recomend">
          <CardsSlider title="Hot prices" items={discountProducts} />
        </section>
      </div>
    </div>
  );
};
