import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const Register = () => {
  const [employee, setEmployee] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [employeeToken, setEmployeeToken] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate('/package.json');
  const { user, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.auth
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passoword and Confirm Passoword do not match');
    } else {
      const userData = {
        name,
        email,
        password,
        mobile,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate('/');
    }
    dispatch(reset());
  }, [isError, isSuccess, navigate, user]);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <section>
      <div className="container p-5">
        <h2 className="text-center">
          <i className="fa-solid fa-user-plus"></i> Register User
        </h2>
        <p className="lead text-center">
          Already have an Account ? <Link to="/login">Login</Link>
        </p>
        <form onSubmit={onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="exampleInputName">Full Name</label>
            <input
              type="text"
              value={name}
              className="form-control"
              id="exampleInputName"
              aria-describedby="emailHelp"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              value={email}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputMobile">Mobile Number</label>
            <input
              type="text"
              value={mobile}
              className="form-control"
              id="exampleInputMobile"
              aria-describedby="emailHelp"
              placeholder="Enter Mobile"
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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

export default Register;
