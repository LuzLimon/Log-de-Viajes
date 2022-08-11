import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const Register = () => {

  const { i18n, t } = useTranslation();
  function changeLaguage(language) {
  i18n.changeLanguage(language);
  }

  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const { name, email, password, confirm_password } = user;
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    !name || !email || !password
      ? alert('All fields are mandatory')
      : password !== confirm_password
      ? alert('Passwords dont match')
      : !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-z\-0-9]+\.)+[a-z]{2,3}))$/.test(
          email
        )
      ? alert('Invalid email')
      : axios({
          url: '/register',
          method: 'POST',
          data: {
            name,
            email,
            password,
            confirm_password,
          },
        })
          .then(() => {
            alert('Registration Successful');
            history.push('/');
          })
          .catch((error) => {
            console.log('Error occured: ' + error);
          });
  };

  return (
    <>
      <form className="signForm" onSubmit={submitHandler}>
        <h3>{t("signup")}</h3>

        <div className="form-group">
          <label>{t("name")}</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={changeHandler}
            className="form-control"
            placeholder="Name"
          />
        </div>

        <div className="form-group">
          <label>{t("emailaddress")}</label>
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
          <label>{t("password")}</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={changeHandler}
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group">
          <label>{t("confirmpassword")}</label>
          <input
            type="password"
            name="confirm_password"
            value={confirm_password}
            onChange={changeHandler}
            className="form-control"
            placeholder="Confirm password"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
        {t("signup")}
        </button>
      </form>
      <Footer />
    </>
  );
};

export default Register;
