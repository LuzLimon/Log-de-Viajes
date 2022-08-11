import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useTranslation } from "react-i18next";

const NavHeader = (props) => {

  const { i18n, t } = useTranslation();
  
  function changeLaguage(language) {
    console.log(language);
    i18n.changeLanguage(language);
  }

  if (props.location.pathname === '/mymap') {
    return false;
  }
  return (
    <Navbar collapseOnSelect expand="lg">
      <Link to="/" style={{ color: 'yellow' }} className="navbar-brand logo">
        Log de Viajes
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto links">
          <Link to="/" style={{ color: 'yellow' }} className="nav-link">
            {t("login")}
          </Link>
          <Link to="/register" style={{ color: 'yellow' }} className="nav-link">
            {t("register")}
          </Link>
          <button onClick={() => {
                    changeLaguage("es");
           }}>ES</button>
          <button onClick={() => {
                    changeLaguage("en");
           }}>EN</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
  
}


export default withRouter(NavHeader);
