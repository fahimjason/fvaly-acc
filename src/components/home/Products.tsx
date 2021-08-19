import Product from 'components/common/Product';
import { IProduct } from 'models/type';
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Products = ({ products }: IProduct[]) => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-3">Latest Products</h2>
        <Row>
          {products.map((product: IProduct) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
