import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTickets } from '../features/ticket/ticketSlice';
import Spinner from '../components/Spinner';
import TicketList from '../components/TicketList';

const Tickets = () => {
  const dispatch = useDispatch();
  const { tickets, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );
  useEffect(() => {
    dispatch(getTickets());
  }, []);

  return (
    <section>
      <div className="container">
        <h1 className="text-center my-5 display-4">My Tickets</h1>
        {isLoading ? <Spinner /> : <TicketList tickets={tickets} />}
      </div>
    </section>
  );
};

export default Tickets;
