import React from "react";

function Footer() {
  return (
    <div className="footer" id="Contacto">
      <div className="footer__title">Contáctame</div>
      <div className="footer__socials">
        <div className="social__container">
          <a href="">
            <img src="/images/icons/linkedin.png" alt="linkedin" />
          </a>
        </div>
        <div className="social__container">
          <a href="">
            <img src="/images/icons/github.png" alt="github" />
          </a>
        </div>
        <div className="social__container">
          <a href="">
            <img src="/images/icons/facebook.png" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
