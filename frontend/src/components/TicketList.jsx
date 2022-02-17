import React from 'react';
import TicketItem from './TicketItem';

const TicketList = ({ tickets }) => {
  return (
    <div className="row">
      {tickets.map((ticket) => (
        <TicketItem key={ticket._id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketList;
