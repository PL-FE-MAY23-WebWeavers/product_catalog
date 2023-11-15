import React from 'react';
import {
  SignedIn,
  SignedOut,
  useUser,
  SignOutButton,
} from '@clerk/clerk-react';
import { Wrapper } from '../../components/utils/Wrapper/Wrapper';
import { Link, Navigate } from 'react-router-dom';
import './userProfile.scss';

export const UserProfile: React.FC = () => {
  const { user } = useUser();

  return (
    <section className="user-profile">
      <Wrapper>
        <SignedOut>
          <Navigate to="/" />
        </SignedOut>
        <SignedIn>
          <h1 className="user-profile__h1">
            Welcome, {user && user.firstName}!
          </h1>

          <div className="user-profile__history">
            <div className="user-profile__no-history">
              <h4 className="user-profile__subtitle">Order History</h4>
              <p className="user-profile__text">
                {`Welcome to your order center, where you can track all updates on your purchases.
                  Maybe you'd fancy a bit of shopping right away? :)`}
              </p>
              <Link to={'/phones'} className="user-profile__button">
                Keep Shopping
              </Link>
            </div>
          </div>

          <div className="user-profile__logout">
            <h4 className="user-profile__subtitle">Are you good to go?</h4>
            <SignOutButton>
              <Link to={'/'} className="user-profile__button">
                Log out
              </Link>
            </SignOutButton>
          </div>
        </SignedIn>
      </Wrapper>
    </section>
  );
};
