import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { sveDestinacije } from '../data/mockData';
import CustomInput from '../components/CustomInput';
import DestinationCard from '../components/DestinationCard';
import { IDestination } from '../models/Destination';


const Explore: React.FC = () => {
  const location = useLocation(); 
  const pocetniRegion = location.state?.prosledjeniRegion || '';

  const [searchTekst, setSearchTekst] = useState<string>(pocetniRegion);
  const [searchCena, setSearchCena] = useState<string>('');
  const [searchTrajanje, setSearchTrajanje] = useState<string>('');
  
  const [filtriraneDestinacije, setFiltriraneDestinacije] = useState<IDestination[]>(sveDestinacije);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;
 
  useEffect(() => {
    const filtrirano = sveDestinacije.filter(dest => {
      const poklapaRegion = dest.region?.toLowerCase().includes(searchTekst.toLowerCase());
      
      const poklapaCenu = searchCena === '' || (dest.cena !== undefined && dest.cena <= Number(searchCena));
      
      const poklapaTrajanje = searchTrajanje === '' || (dest.trajanje !== undefined && dest.trajanje <= Number(searchTrajanje));

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





