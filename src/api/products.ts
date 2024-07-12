import axios from 'axios';

type Product = {
  id: number;
  name: string;
  description: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://fakestoreapi.com/products?limit=5');
  return response.data;
};

export { fetchProducts };
