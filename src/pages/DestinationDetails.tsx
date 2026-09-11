import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';

const DestinationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dodajUPut } = useContext(AppContext); // Pozivamo funkciju iz konteksta

  // Kreiramo dummy objekat za dodavanje
  const handleDodaj = () => {
    const novaDestinacija = {
      id: id || '0',
      naziv: `Destinacija ${id}`,
      slika: `https://picsum.photos/400/300?random=${id}`,
      datum: new Date().toLocaleDateString() // Dodajemo trenutan datum
    };
    dodajUPut(novaDestinacija);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px', minHeight: '60vh' }}>
      <div style={{ display: 'flex', gap: '50px', maxWidth: '900px', width: '100%', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div style={{ border: '2px solid #2d6a4f', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#e8efe9', paddingBottom: '20px', textAlign: 'center' }}>
             <img src={`https://picsum.photos/400/300?random=${id}`} alt="Destinacija" style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
             <h3 style={{ fontFamily: 'serif', marginTop: '15px' }}>Destinacija {id}</h3>
          </div>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'serif', borderBottom: '2px solid #2d6a4f', display: 'inline-block', paddingBottom: '10px' }}>
            Destinacija {id}
          </h1>
          <p style={{ marginTop: '30px', marginBottom: '40px', lineHeight: '1.6', fontFamily: 'serif', textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
          <CustomButton text="DODAJ U PUT" onClick={handleDodaj} /> {/* Povezan onClick */}
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;


