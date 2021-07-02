import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { timeline } from '../../data/timeline.json';
import SvgIcon from '../../components/svg-icon/SvgIcon';
import Footer from '../../components/footer/Footer';

import './About.scss';

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about">
      <div className="intro__container">
        <span>About</span>
        <h1
        data-aos="fade-right"
        data-aos-duration="1000" 
        data-aos-once="true"
        >
          Uselec Corporation
        </h1>
        <div 
          className="introduction"
          data-aos="fade-right"
          data-aos-duration="1000" 
          data-aos-once="true"
        >
        <p>1971年 Uselec Corp. 在美國加州成立。主要業務起初代理台灣半導體工廠，
        為美國半導體公司做 IC 加工，後為廣大的半導體製造商客戶提供相關電子零件、機器零件採購之即時支援服務。</p>
        </div>
        <div className="icon">
          <SvgIcon 
            src="microchip.svg"
            alt="electronic parts"
          />
        </div>
      </div>
      <section 
        className="timeline__section"
        data-aos="fade-up"
        data-aos-duration="1500" 
        data-aos-once="true"
      >
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