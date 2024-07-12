const FeaturedBanners = () => {
  return (
    <>
      <div className="container-fluid" id="bottom-banner">
        <div className="row">
          <div className="col-12 col-md-8">
            <p className="primary-color offer-subtitle">Desconto de até 75%</p>
            <h2 className="light-color">Relógio X</h2>
            <p className="secondary-color">
              Presenteie o seu amor com este relógio luxuoso
            </p>
            <a href="#" className="btn btn-primary">
              Comprar agora
            </a>
          </div>
          <div className="col-12 col-md-4">
            <img src="img/relogio7.png" alt="Relógio 7" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedBanners;
