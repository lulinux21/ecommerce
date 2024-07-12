import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import ProductCard from './ProductCard';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

const fetchProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get('https://fakestoreapi.com/products?limit=4');
  return data;
};

const ProductList = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);
  const { data, isLoading, error } = useQuery<Product[]>(
    'products',
    fetchProducts,
  );

  const toggleFavorite = (product: Product) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(product)
        ? prevFavorites.filter((fav) => fav.id !== product.id)
        : [...prevFavorites, product],
    );
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="row">
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isFavorite={favorites.includes(product)}
          onToggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default ProductList;
