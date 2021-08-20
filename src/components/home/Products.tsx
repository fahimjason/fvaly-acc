import Product from 'components/common/Product';
import { IProduct } from 'models/type';
import { Container, Row } from 'react-bootstrap';
import ProductSkeleton from 'skeletons/ProductSkeleton';

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
}

const Products = ({ products, isLoading }: IProps) => {
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-3">Latest Products</h2>
        <Row>{isLoading && <ProductSkeleton />}</Row>
        <Row>
          {!isLoading &&
            products?.map((product: IProduct) => (
              <Product key={product._id} product={product} />
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
