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
    tripManager.addTrip(destinacija);
    setMojPut([...tripManager.getTrips()]); // Ažuriramo React state
    alert(`Uspešno dodato: ${destinacija.naziv}`);
  };

  return (
    <AppContext.Provider value={{ mojPut, dodajUPut }}>
      {children}
    </AppContext.Provider>
  );
};