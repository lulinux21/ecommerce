import React from 'react';

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
};

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <div className="col-12 col-md-3">
      <div className="card card-products primary-bg-color">
        <img
          src={product.image}
          className="card-img-top img-fluid w-100"
          alt={product.title}
        />
        <div className="card-body">
          <p className="card-category secondary-color">{product.title}</p>
          <p className="card-text primary-color">R${product.price}</p>
          <a href="#" className="btn btn-primary w-50">
            Comprar
          </a>

          <button
            onClick={() => onToggleFavorite(product)}
            className={`btn ${
              isFavorite ? 'btn-danger' : 'btn-outline-secondary'
            }`}
          >
            {isFavorite ? 'Unfavorite' : '❤️'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
