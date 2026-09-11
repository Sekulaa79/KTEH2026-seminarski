// src/pages/Home.tsx
import React from 'react';
import DestinationCard from '../components/DestinationCard';
import { IDestination } from '../models/Destination';

// Koristimo prave slike umesto placeholdera da bi lepše izgledalo
const mockDestinacije: IDestination[] = [
  { id: '1', naziv: 'Vojvodina', slika: 'https://picsum.photos/200/300' },
  { id: '2', naziv: 'Zapad', slika: 'https://picsum.photos/200/300' },
  { id: '3', naziv: 'Sumadija', slika: 'https://picsum.photos/200/300' }
];

const Home: React.FC = () => {
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

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px', flexWrap: 'wrap' }}>
        {mockDestinacije.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
      </div>
    </div>
  );
};

export default Home;
      