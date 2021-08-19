/* eslint-disable no-undef */
import requests from './httpService';
import { IProduct } from 'models/type';

class ProductService {
  getProducts(): Promise<IProduct[]> {
    return requests.get('/product');
  }

  getProductById(id: string): Promise<IProduct> {
    return requests.get(`/product/${id}`);
  }

  addProduct(body: {}): Promise<IProduct> {
    return requests.post(`/product`, body);
  }

  updateProduct(id: string, body: {}): Promise<IProduct> {
    return requests.patch(`/product/${id}`, body);
  }

  deleteProduct(id: string): Promise<IProduct> {
    return requests.delete(`/product/${id}`);
  }
}

export default new ProductService();
