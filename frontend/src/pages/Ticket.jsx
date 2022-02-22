import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTicket, closeTicket } from '../features/ticket/ticketSlice';
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { toast } from 'react-toastify';
import {
  getNotes,
  reset as notesReset,
  createNote,
} from '../features/notes/noteSlice';
import NoteItem from '../components/NoteItem';

const Ticket = () => {
  const [noteText, setNoteText] = useState('');
  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.ticket
  );

  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.note
  );
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(params.ticketId));
    dispatch(getNotes(params.ticketId));
  }, [isError, message, params.ticketId]);

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something Went Wrong</h3>;
  }

  const onTicketClose = () => {
    dispatch(closeTicket(params.ticketId));
    toast.success('Ticket Closed');
    navigate('/tickets');
  };

  const ticketId = params.ticketId;

  const onNoteSubmit = (e) => {
    e.preventDefault();
    console.log(noteText, ticketId);
    dispatch(createNote({ noteText, ticketId }));
  };

  return (
    <section className="py-5">
      <div className="container">
        <div className="card p-3">
          <div className="card-header">
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>Ticket ID: {ticket._id}</span>
              <span
                className={`${
                  ticket.status === 'new' ? 'bg-success' : 'bg-danger'
                } p-1 text-white rounded`}
              >
                {ticket.status}
              </span>
            </div>
          </div>
          <div className="card-body">
            <h4 className="card-title">Product: {ticket.product}</h4>
            <p className="card-text">Description: {ticket.description}</p>
            <p className="card-text">
              Date Submitted:{' '}
              {new Date(ticket.createdAt).toLocaleString('en-IN')}
            </p>
          </div>

          <hr />

          {notes.map((note) => (
            <NoteItem key={note._id} note={note} />
          ))}

          <div className="form-group mt-2">
            <input
              type="text"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
              className="form-control"
              id="message"
              placeholder="Enter Message"
            />
          </div>

          {ticket.status !== 'closed' && (
            <button onClick={onNoteSubmit} className="btn btn-primary">
              Add Note
            </button>
          )}

          {ticket.status !== 'closed' && (
            <button
              onClick={onTicketClose}
              className="btn btn-block btn-danger mt-1"
            >
              Close Ticket
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ticket;
