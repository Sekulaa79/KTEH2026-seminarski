import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';
import './Navbar.css';
import { AppContext } from '../context/AppContext';
import { AuthService } from '../models/User';

const authService = new AuthService();

const Navbar: React.FC = () => {
  const { korisnik, postaviKorisnika } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    postaviKorisnika(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="Planina" style={{ height: '50px', objectFit: 'contain' }} /></Link> 
      </div>
      <div className="nav-links">
        <Link to="/">POCETNA</Link>
        <Link to="/putuj">PUTUJ</Link>
        <Link to="/moj-put">MOJ PUT</Link>
        {korisnik ? (
          <button onClick={handleLogout} className="register-btn" style={{ background: 'transparent', cursor: 'pointer' }}>ODJAVI SE</button>
        ) : (
          <Link to="/registracija" className="register-btn">REGISTRACIJA</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;



{/*
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">

      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Planina" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/">POCETNA</Link>
        <Link to="/putuj">PUTUJ</Link>
        <Link to="/moj-put">MOJ PUT</Link>
        <Link to="/login" className="register-btn">REGISTRACIJA</Link>
      </div>

    </nav>
  );
};

export default Navbar;
*/}