import CartItem from 'components/CartItem/CartItem';
import { IProduct } from 'models/type';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppState } from 'redux/store';

const Checkout = () => {
  const cart: IProduct[] = useSelector((state: AppState) => state.cart);

  return (
    <div className="my-3">
      <Container>
        <div className="wrapper bg-white border rounded p-5">
          {cart.map((item) => (
            <CartItem key={item._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
