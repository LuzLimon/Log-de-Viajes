import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Logout = () => {
  const history = useHistory();
  const removeItem = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <Navbar>
    <Nav className="ml-auto links">
    <Link
      style={{
        position: 'absolute',
        top: '8px',
        right: '8%',
        fontSize: '1.4rem',
        fontWeight: '700',
        color: '#0d47a1',
      }}
      onClick={removeItem}
      to="/"
    >
      <i className="fas fa-sign-out-alt">Logout</i>
      
    </Link>
    <Link to="/history" style={{
       position: 'absolute',
       top: '0px',
       right: '15%',
       fontSize: '1.4rem',
       fontWeight: '700',
       color: '#0d47a1',
     }} className="nav-link">
    Historial
    </Link>
    </Nav>
    </Navbar>
  );
};

export default Logout;
