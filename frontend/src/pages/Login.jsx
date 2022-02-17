import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const Login = () => {
  const [employee, setEmployee] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [employeeToken, setEmployeeToken] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      navigate('/');
    }
    dispatch(reset());
  }, [isError, isSuccess, dispatch, navigate]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section>
      <div className="container p-5">
        <h2 className="text-center">
          <i className="fa-solid fa-right-to-bracket"></i> Login User
        </h2>
        <p className="lead text-center">
          Don't Have an Account ? <Link to="/register">Register</Link>
        </p>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={(e) => setEmployee(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Employee of Rk Bajaj
            </label>
          </div>
          {employee && (
            <div className="form-group">
              <label htmlFor="exampleInputId">Employee Token</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputId"
                placeholder="Enter Employee Token"
                required
              />
            </div>
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
