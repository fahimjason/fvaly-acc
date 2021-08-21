import { IProduct } from 'models/type';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { imageUrlParser } from 'utilities/imageUrlParser';
interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { _id, name, image } = product;

  return (
    <Col md={3} className="mb-3">
      <Link to={`/product/${_id}`}>
        <Card>
          <Card.Img variant="top" src={imageUrlParser(image)} />
          <Card.Body>
            <Card.Text>{name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Product;
