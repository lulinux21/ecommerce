const Banners = () => {
  return (
    <div className="container-fluid m-0 p-0" id="banners-container">
      <div id="slider" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/img/banner1.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption primary-bg-color">
              <h5>Relógios de luxo</h5>
              <p>Para você estar pronto em qualquer situação.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/img/banner3.jpg"
              className="d-block w-100 img-fluid"
              alt="..."
            />
            <div className="carousel-caption primary-bg-color">
              <h5>Linha Importada</h5>
              <p>Conheça os melhores relógios suiços, com pronta entrega.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* MINI BANNERS */}
      <div className="container" id="mini-banners">
        <div className="row justify-content-around">
          <div className="col-12 dark-bg-color" id="mini-banner-1">
            <h2>Nova Coleção</h2>
            <img src="img/relogio1.png" alt="Relógio 1" />
            <a href="#">Compre Agora</a>
          </div>
          <div className="col-12 secondary-bg-color" id="mini-banner-2">
            <h2>Promoções</h2>
            <img src="img/relogio2.png" alt="Relógio 1" />
            <a href="#">Compre Agora</a>
          </div>
          <div className="col-12 light-bg-color" id="mini-banner-3">
            <h2 className="secondary-color">Edição Limitada</h2>
            <a href="#">Compre Agora</a>
            <img src="img/relogio3.png" alt="Relógio 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banners;
