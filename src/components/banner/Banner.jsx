import React from 'react';
import { HashLink } from 'react-router-hash-link';

import './Banner.scss';
import banner from '../../assets/banner.jpg';
import taipei from '../../assets/101.jpg';

const Banner = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -174; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <div className="banner">
      <img src={taipei} alt="uselec with Taiwan" />
      <div className="img-mask"></div>
      <div className="value">
        <p>Professional Service</p>
        <span>提供專業採購服務</span>
        <span>回覆迅速/採購流程簡易</span>
        <span>快速供貨/根據需求時間出貨</span>
        
      </div>
      <HashLink 
        className="hashlink"
        to='/#about'
        scroll={el => scrollWithOffset(el)}
      >
        <div className="arrow">
          <p>more</p>
          <div className="arrow__container">
            <div className="line"></div>
          </div>
        </div>
      </HashLink>
    </div>
  );
}

export default Banner;