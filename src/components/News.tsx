import ProductList from './ProductList';

const News = () => {
  return (
    <>
      <div className="container-fluid px-5" id="new-products">
        <h2 className="title primary-color">Novidades</h2>
        <div className="row">
          <div
            className="col-12 col-md-3 d-none d-md-flex"
            id="new-products-banner"
          >
            <p className="secondary-color">Os melhores</p>
            <h3>Relógios</h3>
            <p className="primary-color">pelos melhores preços</p>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <ProductList />
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
