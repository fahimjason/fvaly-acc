import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import { IProduct } from 'models/type';
import { useEffect, useState } from 'react';
import ProductService from 'services/ProductService';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  useEffect(() => {
    ProductService.getProducts().then((res) => setProducts(res));
  }, []);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
