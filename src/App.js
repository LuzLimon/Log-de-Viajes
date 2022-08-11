import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavHeader from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import MyMap from './Components/Map/MyMap';
import NotFound from './Components/NotFound/NotFound';
import { I18nextProvider } from "react-i18next";
import i18n from "./config/localization/i18n";
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
    <Router>
      <NavHeader />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/mymap" component={MyMap} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
    </I18nextProvider>
  );
};

export default App;