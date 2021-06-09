import React, {useEffect}  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SvgIcon from '../svg-icon/SvgIcon';

import './OrderFlowCard.scss';

const OrderFlowCard = ({ id, icon, title, desc }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const step = parseInt(id) + 1
  const duration = 1000 + parseInt(id)*600;
  
  return (
    <div 
      className="card"
      data-aos="fade-up"
      data-aos-duration={duration} 
      data-aos-once="true"
    >
      <span>{0 + step.toString()}</span>
      <div className="card__icon">
        <SvgIcon src={icon} alt={title} />
      </div>
      <h4>{title}</h4>
      <p className={`card__desc ${id === "0" ? 'request' : '' }`}>{desc}</p>
    </div>
  );
}

export default OrderFlowCard;