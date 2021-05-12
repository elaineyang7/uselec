import React from 'react';

import './Hero.scss';
import banner from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <section className="banner">
      <img src={banner} alt="uselec with Taiwan" />
      <div className="about">
        <h1>Uselec</h1>
        <div className="intro">
          <p>1971年 Uselec Inc. 在美國加州成立一個可靠的進出口代理商。
          起初為美國半導體公司代理台灣半導體工廠做 IC 加工，
          後為廣大的半導體製造商客戶提供相關電子零件、機器零件採購之即時支援服務。</p>
          <a href="#">
            <button className="about-btn">Learn More</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Banner;