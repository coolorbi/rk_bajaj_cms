import React from 'react';

const Home = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="text-center mt-5 p-3">
              <h2 className="display-4 text-center">Welcome to Rk Bajaj</h2>
              <p className="text-center lead">
                One Stop Destination for all of your biking needs.
              </p>
              <button className="btn btn-secondary  px-5 py-2">
                Contact Us
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mt-5 p-4 text-white bg-secondary">
              <div class="table-responsive">
                <table class="table table-borderless text-white">
                  <tbody>
                    <tr>
                      <th scope="row">Service Due On:</th>
                      <td>11/06/2022</td>
                    </tr>
                    <tr>
                      <th scope="row">Service No:</th>
                      <td>4 (Free)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button className="btn btn-block btn-info">
                Set a Service Reminder
              </button>
              <small className="text-muted text-white">
                you will get alerted on email 4 days before due date.
              </small>
              <button className="btn btn-block btn-danger mt-2">
                View Your Documents (RC/Insurance)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
