import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-primary text-white p-2">
      <div className="row text-center" style={{ alignItems: 'center' }}>
        <div className="col-md-6 mt-4">
          <h2>Address:</h2>
          <p className="lead">
            Plot No. 09, Shri Radha Valley, NH-2, Mathura, UP, India.
          </p>
          <div
            style={{ display: 'flex', justifyContent: 'center', gap: '5rem' }}
          >
            <a href="https://www.facebook.com/RKBajajMathura/">
              <i className="fa-brands fa-facebook text-white fa-2x"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram text-white fa-2x"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter text-white fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 mt-4">
          <h5 className="text-center">View on Map</h5>
          <iframe
            className="img-fluid"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.358003448868!2d77.65422441466032!3d27.52033478286981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39737101879b7b1f%3A0x492f4dd4c1117580!2sR%20K%20Bajaj%20(Bajaj%20two%20wheeler%20dealership)%20updated%20by%20GR.!5e0!3m2!1sen!2sin!4v1644776157826!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <p className="lead text-center">
        Copyright &copy; {year}, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
