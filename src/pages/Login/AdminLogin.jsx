/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import { login } from '../../redux/login/login';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('email', email);
    postData.append('password', password);
    const response = await login(postData);
    setResponse(response.messages);
    if (response.status === 200) {
      window.location.href = '/PDG_admin/dashboard';
    }
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Response}
      <h3>Sign In</h3>
      <div className="form-group">
        <InputField
          type="email"
          className="form-control"
          placeholder="Enter email"
          label="Email"
          onChange={
              (e) => {
                setEmail(e.target.value);
              }
        }
        />
      </div>
      <div className="form-group">
        <InputField
          type="password"
          className="form-control"
          placeholder="Enter password"
          label="Passwsord"
          onChange={
              (e) => {
                setPassword(e.target.value);
              }
        }
        />
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
