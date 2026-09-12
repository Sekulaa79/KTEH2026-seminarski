// src/pages/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import { IDestination } from '../models/Destination';

// Koristimo prave slike umesto placeholdera da bi lepše izgledalo
const mockDestinacije: IDestination[] = [
  { id: '1', naziv: 'Vojvodina', slika: 'https://picsum.photos/200/300' },
  { id: '2', naziv: 'Zapad', slika: 'https://picsum.photos/200/300' },
  { id: '3', naziv: 'Sumadija', slika: 'https://picsum.photos/200/300' },
  { id: '4', naziv: 'Kosovo', slika: 'https://picsum.photos/200/300' },
  { id: '5', naziv: 'Istok', slika: 'https://picsum.photos/200/300' }
];

const Home: React.FC = () => {
  const navigate = useNavigate(); 
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'serif', marginBottom: '10px' }}>NAS SAJT NAJBOLJI ZA PUT</h1>
      <p style={{ letterSpacing: '2px', fontSize: '14px', marginBottom: '30px' }}>
        NAS SAJT NAJBOLJI ZA PUT, NAJLAKSE KOD NAS
      </p>
      
      {/* Dodat div oko dugmeta da forsira novi red */}
      <div style={{ marginBottom: '50px' }}>
        <button style={{ backgroundColor: '#2d6a4f', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
          PRIJAVI SE
        </button>
      </div>

      <h2 style={{ fontFamily: 'serif', display: 'inline-block', borderBottom: '2px solid #2d6a4f', paddingBottom: '5px' }}>
        GDE ZELITE ICI
      </h2>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        flexWrap: 'wrap',
        maxWidth: '950px', /* Ograničava širinu tako da stanu tačno 3 u prvi red */
        margin: '40px auto 0' /* Centrira ceo kontejner na sredinu ekrana */
      }}>
        {mockDestinacije.map(dest => (
          <DestinationCard key={dest.id} destination={dest} 
          customOnClick={() => navigate('/putuj', { state: { prosledjeniRegion: dest.naziv } })}/>
        ))}
      </div>
      
    </div>
  );
};

export default Home;
      