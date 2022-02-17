import React from 'react';
import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  return (
    <div className="col-md-6 ">
      <Link to={`/tickets/${ticket._id}`}>
        <div class="card text-white bg-secondary rounded mb-3">
          <div class="card-body">
            <h4 class="card-title">Product: {ticket.product}</h4>
            <p class="card-text">Description: {ticket.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketItem;
