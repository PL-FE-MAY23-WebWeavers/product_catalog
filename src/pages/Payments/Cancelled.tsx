import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../components/utils/Wrapper/Wrapper';
import { useNavigate } from 'react-router-dom';
import './payments.scss';

export const Cancelled: React.FC = () => {
  const [redirectTimer, setRedirectTimer] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setRedirectTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (redirectTimer === 0) {
      navigate('/cart');
    }
  }, [redirectTimer, navigate]);

  return (
    <section className="payments">
      <Wrapper>
        <h1 className="payments__h1">Payment cancelled!</h1>
        <div className="payments__info">
          <p>Looks like we&apos;d run into some issues!</p>
          <p>
            Return to your cart to proceed with payment once again. Don&apos;t
            hesitate to reach out if the problem persists!
          </p>
          <div className="payments__redirect">
            <p>
              In a <span className="payments__counter">{redirectTimer}</span>
              {redirectTimer > 1 ? ' seconds ' : ' second '}
              you&apos;ll be redirected to the cart!
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
