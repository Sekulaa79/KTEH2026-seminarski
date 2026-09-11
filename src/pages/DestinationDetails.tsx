import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import { AppContext } from '../context/AppContext';
import { sveDestinacije } from '../data/mockData'; // Uvozimo bazu

const DestinationDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dodajUPut } = useContext(AppContext);

  // Nalazimo destinaciju ciji se ID poklapa sa ID-jem iz URL-a
  const destinacija = sveDestinacije.find(dest => dest.id === id);

  // Ako korisnik ukuca nepostojeci ID u URL, prikazujemo grešku
  if (!destinacija) {
    return <h2 style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'serif' }}>Destinacija nije pronađena.</h2>;
  }

  const handleDodaj = () => {
    // Prosleđujemo pronadjen objekat, uz dodatak trenutnog datuma
    dodajUPut({ ...destinacija, datum: new Date().toLocaleDateString() });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px', minHeight: '60vh' }}>
      <div style={{ display: 'flex', gap: '50px', maxWidth: '900px', width: '100%', alignItems: 'center' }}>
        
        <div style={{ flex: 1 }}>
          <div style={{ border: '2px solid #2d6a4f', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#e8efe9', paddingBottom: '20px', textAlign: 'center' }}>
             {/* Prava slika i pravi naziv ispod slike */}
             <img src={destinacija.slika} alt={destinacija.naziv} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
             <h3 style={{ fontFamily: 'serif', marginTop: '15px' }}>{destinacija.naziv}</h3>
          </div>
        </div>

        <div style={{ flex: 1, textAlign: 'center' }}>
          {/* Pravi naziv i pravi opis */}
          <h1 style={{ fontFamily: 'serif', borderBottom: '2px solid #2d6a4f', display: 'inline-block', paddingBottom: '10px' }}>
            {destinacija.naziv}
          </h1>
          <p style={{ marginTop: '30px', marginBottom: '40px', lineHeight: '1.6', fontFamily: 'serif', textAlign: 'justify' }}>
            {destinacija.opis}
          </p>
          <CustomButton text="DODAJ U PUT" onClick={handleDodaj} />
        </div>

      </div>
    </div>
  );
};

export default DestinationDetails;