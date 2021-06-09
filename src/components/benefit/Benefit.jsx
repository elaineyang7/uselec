import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SvgIcon from '../svg-icon/SvgIcon';

import './Benefit.scss';

const Benefit = ( {image, alt, title, desc} ) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="benefit">
      <div className="benefit__imgBox">
        <SvgIcon 
          src={image} 
          alt={alt}
        />
      </div>
      <div 
        className="benefit__content"
        data-aos="zoom-in-up"
        data-aos-duration="1000" 
        data-aos-once="true"
      >
        <h4>{title}</h4>
        <p className="benefit__desc">{desc}</p>
      </div>
    </div>
  );
}

export default Benefit;