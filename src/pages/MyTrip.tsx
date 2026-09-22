import React, { useContext } from 'react';
import DestinationCard from '../components/DestinationCard';
import { AppContext } from '../context/AppContext';

const MyTrip: React.FC = () => {
  const { mojPut, korisnik } = useContext(AppContext);

  if (!korisnik) {
    return <h2 style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'serif' }}>Niste prijavljeni.</h2>;
  }

  return (
    <div style={{ padding: '40px 100px' }}>
      <div style={{ backgroundColor: '#2d6a4f', borderRadius: '15px', padding: '20px 40px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', color: 'white' }}>
        <div style={{ width: '60px', height: '60px', backgroundColor: '#e8efe9', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '30px', color: '#888' }}>👤</span>
        </div>
        <h2 style={{ fontFamily: 'serif', margin: 0, fontWeight: 'normal' }}>{korisnik.ime}</h2>
      </div>

      <h3 style={{ fontFamily: 'serif', borderBottom: '2px solid #2d6a4f', display: 'inline-block', paddingBottom: '5px' }}>Moj put</h3>

      <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        {mojPut.length > 0 ? (
          mojPut.map((dest, index) => (
            <DestinationCard key={`${dest.id}-${index}`} destination={dest} />
          ))
        ) : (
          <div>
            <p style={{ fontFamily: 'serif' }}>Korisnik trenutno nema putovanja.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTrip;


