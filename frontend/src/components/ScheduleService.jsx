import React from 'react';

const ScheduleService = ({ service }) => {
  return (
    <div className="col-md-4">
      <div class="card text-white bg-primary mb-3">
        <div class="card-header">
          Service Date: {new Date(service.serviceDate).toDateString()}
        </div>
        <div class="card-body">
          <h4 class="card-title">Vehicle: {service.vehicleModel}</h4>
          {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
        </div>
      </div>
    </div>
  );
};

export default ScheduleService;
