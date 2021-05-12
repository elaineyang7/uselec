import React from 'react';

import './OrderFlowCard.scss';

const OrderFlowCard = ({ id, icon, title, desc }) => {
  return (
    <div className="card">
      <div className="card__icon">
        {icon}
      </div>
      <h4>{title}</h4>
      <p className={`card__desc ${id === "0" ? 'request' : '' }`}>{desc}</p>
    </div>
  );
}

export default OrderFlowCard;