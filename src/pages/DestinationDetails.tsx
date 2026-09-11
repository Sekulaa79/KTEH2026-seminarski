import React from 'react';
import { useParams } from 'react-router-dom';
import CustomButton from '../components/CustomButton';

const DestinationDetails: React.FC = () => {
  // useParams nam omogucava da procitamo ID iz URL-a (npr. /putuj/1)
  const { id } = useParams<{ id: string }>();

  // Za sada koristimo mock podatke. Kasnije cemo po ID-u povuci pravu destinaciju.
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '60px', minHeight: '60vh' }}>
      
      <div style={{ display: 'flex', gap: '50px', maxWidth: '900px', width: '100%', alignItems: 'center' }}>
        
        {/* Leva strana - Slika (simulirana kartica bez teksta) */}
        <div style={{ flex: 1 }}>
          <div style={{ border: '2px solid #2d6a4f', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#e8efe9', paddingBottom: '20px', textAlign: 'center' }}>
             <img 
               src={`https://picsum.photos/400/300?random=${id}`} 
               alt="Destinacija" 
               style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
             />
             <h3 style={{ fontFamily: 'serif', marginTop: '15px' }}>Destinacija {id}</h3>
          </div>
        </div>

        {/* Desna strana - Tekst i dugme */}
        <div style={{ flex: 1, textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'serif', borderBottom: '2px solid #2d6a4f', display: 'inline-block', paddingBottom: '10px' }}>
            Destinacija {id}
          </h1>
          <p style={{ marginTop: '30px', marginBottom: '40px', lineHeight: '1.6', fontFamily: 'serif', textAlign: 'justify' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <CustomButton text="DODAJ U PUT" />
        </div>

      </div>
    </div>
  );
};

export default DestinationDetails;