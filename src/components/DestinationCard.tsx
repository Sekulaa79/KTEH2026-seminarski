import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IDestination } from '../models/Destination';
import './DestinationCard.css';

interface Props {
  destination: IDestination;
  customOnClick?: () => void;
}

const DestinationCard: React.FC<Props> = ({ destination, customOnClick }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    if (customOnClick) {
      customOnClick(); 
    } else {
      navigate(`/putuj/${destination.id}`); 
    }
  };

  return (
    <div 
      className="destination-card" 
     onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <img src={destination.slika} alt={destination.naziv} className="card-image" />
      <div className="card-content">
        <h3>{destination.naziv}</h3>
        {destination.datum && <p className="card-date">{destination.datum}</p>}
      </div>
    </div>
  );
};

export default DestinationCard;







