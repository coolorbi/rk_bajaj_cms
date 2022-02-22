import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../features/auth/authSlice';

const Profile = () => {
  const { isError, isSuccess, isLoading, message, userProfile } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserProfile());
  }, []);
  return (
    <section className="p-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <form>
              <div class="form-group">
                <label for="name">Name</label>
                <input
                  type="name"
                  class="form-control"
                  id="name"
                  value={userProfile.name}
                />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={userProfile.email}
                />
              </div>
              <div class="form-group">
                <label for="mobile">Mobile</label>
                <input
                  type="text"
                  class="form-control"
                  id="mobile"
                  value={userProfile.mobile}
                />
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <img
              src="/images/profile.png"
              alt="{userProfile.name}"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
