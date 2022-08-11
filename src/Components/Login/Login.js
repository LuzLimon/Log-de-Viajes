import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../Footer/Footer';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';

const Login = () => {

  
  const { i18n, t } = useTranslation();
  
  function changeLaguage(language) {
  i18n.changeLanguage(language);
  }


  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitLogin = (e) => {
    e.preventDefault();
    !email || !password
      ? alert('Email and Password are required')
      : axios({
          url: '/login',
          method: 'POST',
          data: {
            email,
            password,
          },
        })
          .then((response) => {
            localStorage.setItem('jwt', JSON.stringify(response.data.token));
            localStorage.setItem('user', JSON.stringify(response.config.data));
            history.push('/mymap');
            const isAuthenticated = response.data.isAuthenticated;
            window.localStorage.setItem('isAuthenticated', isAuthenticated);
          })
          .catch((error) => {
            alert('User not found. ' + error.message);
          });
  };

  return (
    <>
      <form className="signForm" onSubmit={submitLogin}>
        <h3>{t("signin")}</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        </form>
      <Footer />
    </>
  );
};

export default Login;
