import React from 'react';

const TicketItem = ({ ticket }) => {
  return (
    <div class="card text-white bg-secondary mb-3">
      <div class="card-header">Ticket No: {ticket._id}</div>
      <div class="card-body">
        <h4 class="card-title">Product: {ticket.product}</h4>
        <p class="card-text">Description: {ticket.description}</p>
      </div>
    </div>
  );
};

export default TicketItem;
