import React, { createContext, useState, ReactNode } from 'react';
import { IDestination, TripManager } from '../models/Destination';

// Definišemo šta naš Context sadrži
interface AppContextType {
  mojPut: IDestination[];
  dodajUPut: (destinacija: IDestination) => void;
}

// Inicijalizujemo Context
export const AppContext = createContext<AppContextType>({
  mojPut: [],
  dodajUPut: () => {}
});

// Instanciramo klasu
const tripManager = new TripManager();

export const AppProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [mojPut, setMojPut] = useState<IDestination[]>(tripManager.getTrips());

  const dodajUPut = (destinacija: IDestination) => {
    // Provera da li destinacija sa ovim ID-jem već postoji u nizu
    const vecDodato = mojPut.some(dest => dest.id === destinacija.id);

    if (vecDodato) {
      alert(`Destinacija "${destinacija.naziv}" je već u vašem putu!`);
      return; // Prekida izvršavanje funkcije, sprečava dodavanje
    }

    tripManager.addTrip(destinacija);
    setMojPut([...tripManager.getTrips()]);
    alert(`Uspešno dodato: ${destinacija.naziv}`);
  };

  return (
    <AppContext.Provider value={{ mojPut, dodajUPut }}>
      {children}
    </AppContext.Provider>
  );
};