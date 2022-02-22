import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Spinner from '../components/Spinner';

const ContactUS = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post('/api/mail', {
        to: email,
        subject: 'Copy of Your Request',
        message: `Hi ${name}, below is the copy of your contact request. </br> ${message}`,
      });

      setLoading(false);

      if (data.message === 'success') {
        toast.success(
          'Thanks For Reaching out. we have got your mail,we will reach you soon!'
        );
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center display-4">Contact Us</h2>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={onSubmitHandler}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button className="btn btn-primary btn-block" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <img
              src="/images/contact.png"
              alt="contact"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUS;
