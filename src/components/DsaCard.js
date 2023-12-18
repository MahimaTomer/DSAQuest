import React from 'react';
import { Link } from "react-router-dom";

const DsaCard = ({ title, description, progress }) => {
  return (
    <Link to={`/home/topic/${title}`} className="view-details-button"style={{ textDecoration: 'none' }}>
    <div className="dsa-card">
      <h2 className='dsa-h2'>{title}</h2>
      <p className='dsa-p'>{description}</p>
      <p className='dsa-progress'>Progress: {progress}%</p>
    </div>
    </Link>
  );
};

export default DsaCard;


