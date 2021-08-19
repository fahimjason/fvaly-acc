import requests from './httpService';
import { IProduct } from 'models/type';

class StoreService {
  getStore(): Promise<IProduct> {
    return requests.get(`/store`);
  }

  getStoreById(id: string): Promise<IProduct> {
    return requests.get(`/store/${id}`);
  }

  addStore(body: {}): Promise<IProduct> {
    return requests.patch(`/store/`, body);
  }

  updateStore(id: string, body: {}): Promise<IProduct> {
    return requests.patch(`/store/${id}`, body);
  }

  deleteStore(id: string): Promise<IProduct> {
    return requests.delete(`/store/${id}`);
  }
}

export default new StoreService();
