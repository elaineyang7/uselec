import React from 'react';
import { Link } from 'react-router-dom';

import { timeline } from '../../data/timeline.json';
import SvgIcon from '../../components/common/svg-icon/SvgIcon';
import Footer from '../../components/footer/Footer';

import './About.scss';

const About = () => {
  return (
    <div className="about">
      <div className="intro__container">
        <span>About</span>
        <h1>Uselec Corporation</h1>
        <div className="intro">
          <p>1971年 Uselec 在美國加州成立一個可靠的進出口代理商。
          起初為美國半導體公司代理台灣半導體工廠做 IC 加工，
          後為廣大的半導體製造商客戶提供相關電子零件、機器零件採購之即時支援服務。</p>
        </div>
        <div className="icon">
          <SvgIcon 
            src="microchip.svg"
            alt="electronic parts"
          />
        </div>
      </div>
      <section className="timeline__section">
        <h2>Uselec History</h2>
        <div className="timeline__wrapper">
          <ol>
            {timeline.map( (event, index) => (
              <li 
                key={index}
                className="timeline" 
              >
                <span>{event.time}</span>
                <p>{event.desc}</p>
              </li>
            ))}
          </ol>
          
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;