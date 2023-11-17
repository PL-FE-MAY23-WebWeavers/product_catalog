import React, { useEffect, useState } from 'react';
import { useProductCatalog } from '../../context/ProductCatalogContext';
import { Wrapper } from '../../components/utils/Wrapper/Wrapper';
import { useNavigate } from 'react-router-dom';
import './payments.scss';

export const Successful: React.FC = () => {
  const { emptyCart } = useProductCatalog();
  const [redirectTimer, setRedirectTimer] = useState(7);
  const navigate = useNavigate();

  useEffect(() => {
    emptyCart();

    const timer = setInterval(() => {
      setRedirectTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (redirectTimer === 0) {
      navigate('/');
    }
  }, [redirectTimer, navigate]);

  return (
    <section className="payments">
      <Wrapper>
        <h1 className="payments__h1">Payment done!</h1>
        <div className="payments__info">
          <p>
            Thank you for purchasing our products, in the future, you&apos;d be
            able to see them in your user panel!
          </p>
          <div className="payments__redirect">
            <p>
              In a <span className="payments__counter">{redirectTimer}</span>
              {redirectTimer > 1 ? ' seconds ' : ' second '}
              you&apos;ll be redirected to the homepage!
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
