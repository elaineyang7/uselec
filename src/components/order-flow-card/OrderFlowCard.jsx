import React from 'react';

import SvgIcon from '../svg-icon/SvgIcon';

import './OrderFlowCard.scss';

const OrderFlowCard = ({ id, icon, title, desc }) => {
  const step = parseInt(id) + 1
  return (
    <div className="card">
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