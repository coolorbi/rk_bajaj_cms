import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ScheduleService from '../components/ScheduleService';
import Spinner from '../components/Spinner';
import { reset, getUserServices } from '../features/services/serviceSlice';

const ScheduledService = () => {
  const dispatch = useDispatch();
  const { services, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.service
  );

  useEffect(() => {
    dispatch(getUserServices());
    if (isError) {
      toast.error(message);
    }
  }, [isSuccess, isError, message]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section>
      <div className="container">
        <h2 className="text-center display-4">My Services</h2>
        <div className="row">
          {services.map((service) => (
            <ScheduleService service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduledService;
