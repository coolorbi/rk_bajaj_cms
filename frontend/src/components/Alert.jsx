import React from 'react';

const Alert = ({ type, children }) => {
  return (
    <div class={`alert alert-dismissible alert-${type}`}>
      <button type="button" class="close" data-dismiss="alert">
        &times;
      </button>
      <strong>{children}</strong>
    </div>
  );
};

export default Alert;
