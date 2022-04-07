/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import InputField from '../../components/InputField/InputField';

export default function AdminLogin() {
  return (
    <form>
      <h3>Sign In</h3>
      <div className="form-group">
        <InputField type="email" className="form-control" placeholder="Enter email" label="Email" />
      </div>
      <div className="form-group">
        <InputField type="password" className="form-control" placeholder="Enter password" label="Passwsord" />
      </div>
      {/* <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
      </div> */}
      <button type="submit" className="btn btn-primary btn-block">Submit</button>
      <p className="forgot-password text-right">
        Forgot
        {' '}
        <a href="#">password?</a>
      </p>
    </form>
  );
}
