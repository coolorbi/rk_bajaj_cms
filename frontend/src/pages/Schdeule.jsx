import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reset, createService } from '../features/services/serviceSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Schdeule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { service, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.service
  );
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [mobile] = useState(user.mobile);
  const [vehicle, setVehicle] = useState('Pulsar');
  const [date, SetDate] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, mobile, vehicle, date);
    const serviceData = {
      vehicleModel: vehicle,
      serviceDate: date,
    };
    dispatch(createService(serviceData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate('/');
    }
    reset();
  }, [navigate, isError, isSuccess]);

  return (
    <section className="p-5">
      <div className="container">
        <h2 className="text-center">Schedule Your Vehicle Service.</h2>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              value={mobile}
              disabled
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicle">Vehicle</label>
            <select
              onChange={(e) => setVehicle(e.target.value)}
              id="vehicle"
              className="form-control"
              defaultValue={'Pulsar'}
            >
              <option value={'Pulsar'}>Pulsar</option>
              <option value={'Platina'}>Platina</option>
              <option value={'CT 100'}>CT 100</option>
              <option value={'Dominor'}>Dominor</option>
              <option value={'Avenger'}>Avenger</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={(e) => SetDate(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <button className="btn btn-block btn-secondary mt-2">
          View Booked Services
        </button>
      </div>
    </section>
  );
};

export default Schdeule;
