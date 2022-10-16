import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="contact-icons">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://github.com/RCvetinskis"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/robertas-cvetinskis-59b93a242/?fbclid=IwAR2SxP5wwiosvHxdIHzhc1ZX0IqGT78DarqkMR-aFJ9R6W3hhL5IAcr8voE"
        >
          {" "}
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a href="mailto:robertas.cvetinskis@gmail.com">
          {" "}
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href="tel: +37064788389">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
