import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg primary-bg-color py-4 px-2"
        id="navbar"
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            ExactTime
          </a>
          <div id="navbar-items">
            <div></div>
            <form className="d-flex" id="search-form">
              <i className="bi bi-search primary-color"></i>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Busque o seu relógio..."
                aria-label="Search"
              />
              <button className="btn secondary-bg-color" type="submit">
                Pesquisar
              </button>
            </form>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-person"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-heart"></i>
                </a>
                <span className="qty-info">5</span>
              </li>
              <li className="nav-item" id="bag-item">
                <a className="nav-link" href="#">
                  <i className="bi bi-bag"></i>
                  <b>R$ 1290,12</b>
                </a>
                <span className="qty-info">8</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg secondary-bg-color p-2"
        id="bottom-navbar-container"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bottom-navbar"
            aria-controls="bottom-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <ul
            className="navbar-nav mb-2 mb-lg-0 collapse navbar-collapse"
            id="bottom-navbar"
          >
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Produtos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Promoções
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
