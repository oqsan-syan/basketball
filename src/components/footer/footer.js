import React from 'react';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="copy">
            © 2011-2016 «Всё про спорт.ру» <br></br>
            Любое использование материалов приветствуется при гиперссылке
          </div>
          <a href="#" className="footer__link">
            <img src={require("./assets/footer-link.png")} alt="footer"></img>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;