import React from 'react';

const ScheduleService = ({ service }) => {
  return (
    <div className="col-md-4">
      <div className="card p-3 rounded">
        <card-body>
          <h4 className="card-title">Service Date: ${service.serviceDate}</h4>
          <p>Vehicle: ${service.vehicleModel}</p>
        </card-body>
      </div>
    </div>
  );
};

export default ScheduleService;
