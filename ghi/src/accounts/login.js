import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLogInMutation } from '../store/authApi';
import { updateField } from '../store/accountSlice';
import { useNavigate } from "react-router-dom";
import React, { useEffect } from 'react'
import { Alert } from 'react-bootstrap';


function Login() {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.account);
  const [logIn, { error, isLoading: logInLoading, isSuccess: loginSuccessful }] = useLogInMutation();
  const field = useCallback(
    e => dispatch(updateField({field: e.target.name, value: e.target.value})),
    [dispatch],
  );
  const navigate = useNavigate()

  const handleLogin = async () => {
  if (loginSuccessful) {
    navigate('/')
  }
}

useEffect(() => {
  handleLogin();
});


  return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="p-4 mt-4">
                    <h1 className="header-title">Log In</h1>
                    { error ? <Alert variant="danger">{error.data.detail}</Alert> : null }
                    <form method="POST" onSubmit={ async (e) => {
                    e.preventDefault(); await logIn(e.target); handleLogin();}}>
                    <div className="form-floating mb-3">
                        <input required onChange={field} value={email} name="email" className="form-control" type="email" placeholder="example@example.com" />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input required onChange={field} value={password} name="password" className="form-control" type="text" placeholder="password" />
                        <label className="label">Password</label>
                    </div>
                    <button disabled={logInLoading} className="btn btn-primary">Submit</button>
                    <button className="btn btn-secondary" onClick={() => dispatch((null))}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
  );
}

export default Login;
