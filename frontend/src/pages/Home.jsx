import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const mystyle = {
    background:
      "linear-gradient(to right,rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('/images/postor.jpg')",
    backgroundSize: 'cover',
  };
  return (
    <>
      <section style={mystyle} className="py-5 text-center">
        <div className="container">
          <div className="text-center p-5">
            <h2 className="display-4 text-center text-white">
              Welcome to Rk Bajaj
            </h2>
            <p className="text-center lead text-white d-sm-none d-md-block">
              One Stop Destination for all of your biking needs.
            </p>
            <Link to="/contact" className="btn btn-secondary  px-5 mt-2 ">
              Contact Us
            </Link>
            <Link to="/support" className="btn btn-warning px-5 mt-2 ">
              Create Ticket
            </Link>
          </div>
        </div>
      </section>
      <section className="p-5">
        <div className="container">
          <h2 className="text-center display-4">
            Exclusive Services only for You
          </h2>
          <div className="row">
            <div className="col-md-6 mt-4">
              <div className="card text-center shadow-lg">
                <div className="card-body">
                  <i className="fa-solid fa-screwdriver-wrench fa-2x text-primary"></i>
                  <h4 className="card-title mt-2">
                    <strong>Schedule Your Service</strong>{' '}
                  </h4>
                  <p className="card-text">
                    Schedule your Bike Service with Us, without any hassle.
                  </p>
                  <Link to="/schedule" className="btn btn-primary">
                    Schedule <i className="ml-2 fa-solid fa-calendar-plus"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="card text-center shadow-lg">
                <div className="card-body">
                  <i className="fa-solid fa-file-invoice fa-2x"></i>
                  <h4 className="card-title mt-2">
                    <strong>View Your Documents</strong>{' '}
                  </h4>
                  <p className="card-text">
                    Get Your Insurance and RC withour ever leaving your home.
                  </p>
                  <Link to="/view-documents" className="btn btn-secondary">
                    Download RC / Insurance
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
