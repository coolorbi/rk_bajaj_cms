import React from 'react';
import { Link } from 'react-router-dom';

const TicketItem = ({ ticket }) => {
  return (
    <div className="col-md-6 ">
      <Link to={`/tickets/${ticket._id}`}>
        <div className="card border-primary text-secondary rounded mb-3">
          <div className="card-header">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                className={`${
                  ticket.status === 'new' ? 'bg-success' : 'bg-danger'
                } p-1 text-white rounded`}
              >
                {ticket.status}{' '}
              </span>{' '}
              <span>{new Date(ticket.createdAt).toLocaleString('en-IN')}</span>
            </div>
          </div>
          <div className="card-body">
            <h4 className="card-title">Product: {ticket.product}</h4>
            <p className="card-text">Description: {ticket.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketItem;
