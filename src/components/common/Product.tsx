import { IProduct } from 'models/type';
import { Card, Col } from 'react-bootstrap';
import { imageUrlParser } from 'utilities/imageUrlParser';
interface IProps {
  product: IProduct;
}

const Product = ({ product }: IProps) => {
  const { name, image } = product;

  return (
    <Col md={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={imageUrlParser(image)} />
        <Card.Body>
          <Card.Text>{name}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
