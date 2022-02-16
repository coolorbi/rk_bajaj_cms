import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../features/ticket/ticketSlice';
import Spinner from '../components/Spinner';
import TicketItem from '../components/TicketItem';

const Tickets = () => {
  const dispatch = useDispatch();
  const { tickets, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );
  useEffect(() => {
    dispatch(getTickets());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section>
      <div className="container">
        <h1 className="text-center display-3">Tickets</h1>
        {tickets.map((ticket) => (
          <TicketItem key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </section>
  );
};

export default Tickets;
