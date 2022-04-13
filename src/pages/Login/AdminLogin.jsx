/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import InputField from '../../components/InputField/InputField';
import { login } from '../../redux/login/login';
// import { getAdmin } from '../../redux/admin/admin';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Response, setResponse] = useState('');
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // console.log(navigate);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('email', email);
    postData.append('password', password);
    const response = await login(postData);
    setResponse(response.messages);
    if (response.status === 200) {
      navigate('/PDG_admin/dashboard', { state: { id: response.user.data.user.id } });
    }
    console.log(response.user.data.user.id);
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
