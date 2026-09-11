// src/pages/Explore.tsx
import React, { useState, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import DestinationCard from '../components/DestinationCard';
import { IDestination } from '../models/Destination';

// Dodajemo iste test podatke, kasnije ovo moze ici iz nekog globalnog fajla
const sveDestinacije: IDestination[] = [
  { id: '1', naziv: 'Nis', slika: 'https://picsum.photos/200/300' },
  { id: '2', naziv: 'Prizren', slika: 'https://picsum.photos/200/300' },
  { id: '3', naziv: 'Uvac', slika: 'https://picsum.photos/200/300' },
  { id: '4', naziv: 'Beograd', slika: 'https://picsum.photos/200/300' },
  { id: '5', naziv: 'Novi Sad', slika: 'https://picsum.photos/200/300' }
];

const Explore: React.FC = () => {
  // useState hook-ovi za cuvanje vrednosti filtera
  const [searchTekst, setSearchTekst] = useState<string>('');
  const [filtriraneDestinacije, setFiltriraneDestinacije] = useState<IDestination[]>(sveDestinacije);

  // useEffect hook reaguje svaki put kada se promeni searchTekst
  useEffect(() => {
    const filtrirano = sveDestinacije.filter(dest => 
      dest.naziv.toLowerCase().includes(searchTekst.toLowerCase())
    );
    setFiltriraneDestinacije(filtrirano);
  }, [searchTekst]);

  return (
    <div style={{ padding: '40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '50px', marginLeft: '50px' }}>
        <h2 style={{ fontFamily: 'serif', borderBottom: '2px solid #2d6a4f', paddingBottom: '5px' }}>Filteri</h2>
        
        {/* Koristimo nasu višekratnu komponentu i vezujemo je za State */}
        <CustomInput 
          placeholder="Destinacija " 
          value={searchTekst}
          onChange={(e) => setSearchTekst(e.target.value)}
        />
        <CustomInput placeholder="Trajanje" />
        <CustomInput placeholder="Cena" />
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '30px', 
        flexWrap: 'wrap',
        maxWidth: '950px',
        margin: '0 auto' 
      }}>
        {filtriraneDestinacije.map(dest => (
          <DestinationCard key={dest.id} destination={dest} />
        ))}
        {filtriraneDestinacije.length === 0 && <p>Nema rezultata za tu pretragu.</p>}
      </div>
    </div>
  );
};

export default Explore;