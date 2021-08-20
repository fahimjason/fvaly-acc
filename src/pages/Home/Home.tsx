import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import useAsync from 'hooks/useAsync';
// import { IProduct } from 'models/type';
// import { useEffect, useState } from 'react';
import ProductService from 'services/ProductService';

const Home = () => {
  // const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);

  // useEffect(() => {
  //   ProductService.getProducts().then((res) => setProducts(res));
  // }, []);

  const { data, isLoading } = useAsync(ProductService.getProducts);
  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={data} />
    </div>
  );
};

export default Home;
