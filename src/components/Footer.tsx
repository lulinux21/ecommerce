import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer id="footer">
        <div className="container-fluid" id="footer-links-container">
          <div className="row">
            <div className="col-12 col-md-4 footer-column">
              <h3>Páginas</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="secondary-color">
                    Home
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="secondary-color">
                    Categorias
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="secondary-color">
                    Promoções
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="secondary-color">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-4 footer-column" id="footer-center">
              <h3>ExactTime</h3>
              <p className="secondary-color">Algum dúvida? Ligue para nós</p>
              <p className="store-phone">
                <i className="bi bi-telephone"></i> (50)99999-9999
              </p>
            </div>
            <div className="col-12 col-md-4 footer-column">
              <h3>Informações</h3>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="secondary-color">
                    Política de Privacidade
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="secondary-color">
                    Política de Entregas
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="secondary-color">
                    Rastreie seu pedido
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-fluid" id="newsletter-container">
          <div className="col-12">
            <div className="row">
              <p className="secondary-color">
                Se inscreva na nossa Newsletter:
              </p>
              <form className="d-flex" id="news-form">
                <i className="bi bi-envelope primary-color"></i>
                <input
                  className="form-control me-2"
                  placeholder="Insira seu e-mail"
                />
                <button className="btn secondary-bg-color" type="submit">
                  Enviar
                </button>
              </form>
            </div>
          </div>
          <div className="col-12" id="social-container">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
        <div className="container" id="copy-container">
          <p>
            Todos os direitos reservados @2024{' '}
            <span className="primary-color">ExactTime</span> - A sua loja de
            relógios
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
