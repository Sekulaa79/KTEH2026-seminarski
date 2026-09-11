import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IDestination } from '../models/Destination';
import './DestinationCard.css';

interface Props {
  destination: IDestination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  const navigate = useNavigate(); // Hook za navigaciju

  return (
    // Dodat onClick i kursor pokazivac
    <div 
      className="destination-card" 
      onClick={() => navigate(`/putuj/${destination.id}`)}
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






{/*
  import React from 'react';
import { IDestination } from '../models/Destination';
import './DestinationCard.css';

interface Props {
  destination: IDestination;
}

const DestinationCard: React.FC<Props> = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.slika} alt={destination.naziv} className="card-image" />
      <div className="card-content">
        <h3>{destination.naziv}</h3>
        {destination.datum && <p className="card-date">{destination.datum}</p>}
      </div>
    </div>
  );
};

export default DestinationCard;
*/}