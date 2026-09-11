// src/pages/Explore.tsx
import React, { useState, useEffect } from 'react';
import { sveDestinacije } from '../data/mockData';
import CustomInput from '../components/CustomInput';
import DestinationCard from '../components/DestinationCard';
import { IDestination } from '../models/Destination';


const Explore: React.FC = () => {
  const [searchTekst, setSearchTekst] = useState<string>('');
  const [searchCena, setSearchCena] = useState<string>('');
  const [searchTrajanje, setSearchTrajanje] = useState<string>('');
  
  const [filtriraneDestinacije, setFiltriraneDestinacije] = useState<IDestination[]>(sveDestinacije);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;
 
  useEffect(() => {
    const filtrirano = sveDestinacije.filter(dest => {
      // 1. Provera regiona
      const poklapaRegion = dest.region?.toLowerCase().includes(searchTekst.toLowerCase());
      
      // 2. Provera cene (ako je prazno = true, inace proverava da li je cena manja ili jednaka unetoj)
      const poklapaCenu = searchCena === '' || (dest.cena !== undefined && dest.cena <= Number(searchCena));
      
      // 3. Provera trajanja
      const poklapaTrajanje = searchTrajanje === '' || (dest.trajanje !== undefined && dest.trajanje <= Number(searchTrajanje));

      // Kartica se prikazuje samo ako zadovoljava sva tri uslova istovremeno
      return poklapaRegion && poklapaCenu && poklapaTrajanje;
    });

    setFiltriraneDestinacije(filtrirano);
    setCurrentPage(1); 
  }, [searchTekst, searchCena, searchTrajanje]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtriraneDestinacije.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filtriraneDestinacije.length / itemsPerPage);

  return (
    <div style={{ padding: '40px', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '80px', marginLeft: '50px' }}>
        <h2 style={{ fontFamily: 'serif', borderBottom: '2px solid #2d6a4f', paddingBottom: '5px' }}>Filteri</h2>
        
        <CustomInput 
          placeholder="Region (npr. Kosovo)" 
          value={searchTekst}
          onChange={(e) => setSearchTekst(e.target.value)}
        />
        <CustomInput 
          placeholder="Max Cena (npr. 100)" 
          type="number"
          value={searchCena}
          onChange={(e) => setSearchCena(e.target.value)}
        />
        <CustomInput 
          placeholder="Max Trajanje (dana)" 
          type="number"
          value={searchTrajanje}
          onChange={(e) => setSearchTrajanje(e.target.value)}
        />
      </div>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', padding: '0 50px', flexGrow: 1, alignItems: 'flex-start' }}>
        {currentItems.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
        {currentItems.length === 0 && <p style={{ fontFamily: 'serif' }}>Nema rezultata za unete kriterijume.</p>}
      </div>

      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '80px', marginBottom: '20px' }}>
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            style={{ padding: '10px 25px', backgroundColor: currentPage === 1 ? '#ccc' : '#2d6a4f', color: 'white', border: 'none', borderRadius: '5px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >
            Nazad
          </button>
          
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            style={{ padding: '10px 25px', backgroundColor: currentPage === totalPages ? '#ccc' : '#2d6a4f', color: 'white', border: 'none', borderRadius: '5px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >
            Napred
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;





{/*
import React, { useState, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import DestinationCard from '../components/DestinationCard';
import { IDestination } from '../models/Destination';

const sveDestinacije: IDestination[] = [
  { id: '1', naziv: 'Nis', region: 'Istok', slika: 'https://picsum.photos/280/180?random=1' },
  { id: '2', naziv: 'Prizren', region: 'Kosovo', slika: 'https://picsum.photos/280/180?random=2' },
  { id: '3', naziv: 'Pec', region: 'Kosovo', slika: 'https://picsum.photos/280/180?random=3' },
  { id: '4', naziv: 'Gracanica', region: 'Kosovo', slika: 'https://picsum.photos/280/180?random=4' },
  { id: '5', naziv: 'Novi Sad', region: 'Vojvodina', slika: 'https://picsum.photos/280/180?random=5' },
  { id: '6', naziv: 'Zlatibor', region: 'Zapad', slika: 'https://picsum.photos/280/180?random=6' },
  { id: '7', naziv: 'Kragujevac', region: 'Sumadija', slika: 'https://picsum.photos/280/180?random=7' }
];

const Explore: React.FC = () => {
  const [searchTekst, setSearchTekst] = useState<string>('');
  const [filtriraneDestinacije, setFiltriraneDestinacije] = useState<IDestination[]>(sveDestinacije);
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const filtrirano = sveDestinacije.filter(dest => 
      dest.region?.toLowerCase().includes(searchTekst.toLowerCase())
    );
    setFiltriraneDestinacije(filtrirano);
    setCurrentPage(1); 
  }, [searchTekst]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtriraneDestinacije.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(filtriraneDestinacije.length / itemsPerPage);

  return (
    <div style={{ padding: '40px', minHeight: '80vh', display: 'flex', flexDirection: 'column' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '80px', marginLeft: '50px' }}>
        <h2 style={{ fontFamily: 'serif', borderBottom: '2px solid #2d6a4f', paddingBottom: '5px' }}>Filteri</h2>
        
        <CustomInput 
          placeholder="Region" 
          value={searchTekst}
          onChange={(e) => setSearchTekst(e.target.value)}
        />
        <CustomInput placeholder="Trajanje" />
        <CustomInput placeholder="Cena" />
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        flexWrap: 'wrap',
        padding: '0 50px',
        flexGrow: 1,
        alignItems: 'flex-start' 
      }}>

        {currentItems.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
        {currentItems.length === 0 && <p>Nema rezultata za uneti region.</p>}
      </div>

      {totalPages > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '80px', marginBottom: '20px' }}>
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            style={{ padding: '10px 25px', backgroundColor: currentPage === 1 ? '#ccc' : '#2d6a4f', color: 'white', border: 'none', borderRadius: '5px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >
            Nazad
          </button>
          
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            style={{ padding: '10px 25px', backgroundColor: currentPage === totalPages ? '#ccc' : '#2d6a4f', color: 'white', border: 'none', borderRadius: '5px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', fontWeight: 'bold' }}
          >
            Napred
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;
*/}