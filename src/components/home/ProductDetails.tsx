import useAsync from 'hooks/useAsync';
import { IProduct } from 'models/type';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import ProductService from 'services/ProductService';
import { imageUrlParser } from 'utilities/imageUrlParser';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface IParams {
  id: string;
}
const ProductDetails = () => {
  const { id } = useParams<IParams>();
  const { data, error, isLoading, isSuccess, isError } = useAsync<IProduct>(
    () => ProductService.getProductById(id)
  );
  const { name, description, image, price } = (data || {}) as IProduct;
  return (
    <div className="product_details_component">
      <Container>
        <div className="wrapper bg-white rounded border p-5">
          {isLoading && <h3>Loading...</h3>}
          {isSuccess && (
            <Row>
              <Col md={4}>
                <img src={imageUrlParser(data ? image : '')} alt={name} />
              </Col>
              <Col md={8}>
                <h3 className="mb-3">{name}</h3>
                <h1>৳{price}</h1>
                <button className="btn btn-primary">
                  <AiOutlineShoppingCart />
                  Add to Cart
                </button>
                <p className="mt-5">{description}</p>
              </Col>
            </Row>
          )}
        </div>
        {isError && <h1>{error}</h1>}
      </Container>
    </div>
  );
};

export default ProductDetails;
