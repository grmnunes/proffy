import React from 'react';

import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';



const Landing: React.FC = () => {
  return (
      <div id="page-landing">
          <div id="page-landing-content" className="container">
              <div className="logo-container">
                  <img src={logoImg} alt="proffy"/>
                  <h2>Sua plataforma de estudos online.</h2>
              </div>

              <img src={landingImg} alt="" className="hero-image"/>

              <div className="buttons-container">
                  <a href="/study" className="study">
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                  </a>
                  <a href="/lesson" className="give-classes">
                    <img src={giveClassesIcon} alt="Ensinar"/>
                    Ensinar
                  </a>
              </div>

              <span className="total-connnections">
                  Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt=""/>
              </span>
          </div>
      </div>
  );
}

export default Landing;