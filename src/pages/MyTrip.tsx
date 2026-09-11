import React, { useContext } from 'react';
import DestinationCard from '../components/DestinationCard';
import { AppContext } from '../context/AppContext';

const MyTrip: React.FC = () => {
  const { mojPut } = useContext(AppContext);

  return (
    <div style={{ padding: '40px 100px' }}>
      
      {/* Profilni baner iz dizajna */}
      <div style={{ backgroundColor: '#2d6a4f', borderRadius: '15px', padding: '20px 40px', display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '40px', color: 'white' }}>
        <div style={{ width: '60px', height: '60px', backgroundColor: '#e8efe9', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ fontSize: '30px', color: '#888' }}>👤</span>
        </div>
        <h2 style={{ fontFamily: 'serif', margin: 0, fontWeight: 'normal' }}>Pera Peric</h2>
      </div>

      <h3 style={{ fontFamily: 'serif', borderBottom: '2px solid #2d6a4f', display: 'inline-block', paddingBottom: '5px' }}>
        Moj put
      </h3>

      <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        {mojPut.length > 0 ? (
          mojPut.map((dest, index) => (
            // Koristimo kombinaciju ID-a i indexa za key jer možemo dodati istu destinaciju više puta
            <DestinationCard key={`${dest.id}-${index}`} destination={dest} />
          ))
        ) : (
          <div>
            <p style={{ fontFamily: 'serif' }}>Korisnik trenutno nema putovanja.</p>
            <p style={{ fontFamily: 'serif' }}>Klikni i odaberi destinaciju - PUTUJ</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default MyTrip;