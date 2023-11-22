import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

// Importe o logo da sua empresa
import Logo from '../img/logo.png';

const Home = () => {
  return (
    <body>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="form">
      <div className="logo-container">
          <img src={Logo} alt="Logo da MediCare" className="logo" />
        </div>
        <h3>MediCare</h3>
        <div className="content">
          <h1>Bem-vindo!</h1>
          
          <div className="links">
            <Link to="/" className="logout-btn">
              Logout
            </Link>
            <span className="divider">|</span>
            <Link to="/solutions" className="solutions-btn">
              Soluções
            </Link>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
