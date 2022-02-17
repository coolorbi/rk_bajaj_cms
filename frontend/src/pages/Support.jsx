import React from 'react';
import CreateTicket from '../components/CreateTicket';
import { Link } from 'react-router-dom';

const Support = () => {
  return (
    <section>
      <div className="container p-5">
        <CreateTicket />
        <Link
          to="/tickets"
          className="btn rounded btn-secondary btn-block my-5"
        >
          My Tickets <i class="ml-2 fa-solid fa-arrow-right-long"></i>
        </Link>
      </div>
    </section>
  );
};

export default Support;
