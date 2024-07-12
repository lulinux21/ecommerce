import ProductList from './ProductList';

const BestSellers = () => {
  return (
    <>
      <div className="container-fluid px-5" id="best-sellers">
        <h2 className="title primary-color">Best Sellers</h2>
        <ProductList />
      </div>
    </>
  );
};

export default BestSellers;
