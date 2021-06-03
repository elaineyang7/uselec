import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Hero.scss';
import banner from '../../assets/banner.jpg';

const Hero = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -374; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }
  
  return (
    <section className="banner">
      <img src={banner} alt="uselec with Taiwan" />
      <div className="img-mask"></div>
      <div className="value">
        <p>Professional Service</p>
        <span>回覆迅速/採購流程簡易</span>
        <span>快速供貨/根據需求時間出貨</span>
        <span>提供專業採購服務</span>
        
      </div>
      
      <div class="arrow">
        <div class="arrow__container">
          <div class="line"></div>
        </div>
      </div>
      <div className="about" id="about">
        <h1>Uselec</h1>
        <div className="intro">
          <p>1971年 Uselec Inc. 在美國加州成立一個可靠的進出口代理商。
          起初為美國半導體公司代理台灣半導體工廠做 IC 加工，
          後為廣大的半導體製造商客戶提供相關電子零件、機器零件採購之即時支援服務。</p>
          <Link className="learn-more" to='/about'>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
