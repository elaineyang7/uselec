import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './HomepageAbout.scss';

const HomepageAbout = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <section className="about" id="about">
      <h1>Uselec</h1>
      <div className="intro">
        <p>1971年 Uselec Corp. 在美國加州成立一個可靠的進出口代理商。
        起初為美國半導體公司代理台灣半導體工廠做 IC 加工，
        後為廣大的半導體製造商客戶提供相關電子零件、機器零件採購之即時支援服務。</p>
        <HashLink 
          to='/about'
          scroll={el => scrollWithOffset(el)}
          className="link"
        >
          <div className="learn-more">
            <p>Learn More</p>
          </div>
        </HashLink>
      </div>
      
    </section>
  );
}

export default HomepageAbout;
