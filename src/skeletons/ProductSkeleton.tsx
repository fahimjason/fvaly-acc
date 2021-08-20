import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const ProductSkeleton = () => {
  return (
    <Row>
      {Array(12)
        .fill('')
        .map((product, index) => (
          <Col md={3} key={index} className="mb-3">
            <Skeleton style={{ borderRadius: 10 }} height={320} />
          </Col>
        ))}
    </Row>
  );
};

export default ProductSkeleton;
