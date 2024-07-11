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
  const { data } = await axios.get('https://fakestoreapi.com/products');
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
    <div>
      <h2 className="mb-4">Favorites</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {favorites.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={true}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
      <h2 className="mt-4 mb-4">All Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
