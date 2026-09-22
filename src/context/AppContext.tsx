import React, { createContext, useState, ReactNode } from 'react';
import { IDestination, TripManager } from '../models/Destination';
import { IUser, AuthService } from '../models/User';

interface AppContextType {
  mojPut: IDestination[];
  dodajUPut: (destinacija: IDestination) => void;
  korisnik: IUser | null;
  postaviKorisnika: (user: IUser | null) => void;
}

export const AppContext = createContext<AppContextType>({
  mojPut: [],
  dodajUPut: () => {},
  korisnik: null,
  postaviKorisnika: () => {}
});

const tripManager = new TripManager();
const authService = new AuthService();  

export const AppProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [mojPut, setMojPut] = useState<IDestination[]>(tripManager.getTrips());
  const [korisnik, setKorisnik] = useState<IUser | null>(authService.getCurrentUser());
  
  const dodajUPut = (destinacija: IDestination) => {
    if (!korisnik) {
      alert("Morate se prijaviti da biste dodali putovanje!");
      return;
    }
    
    const vecDodato = mojPut.some(dest => dest.id === destinacija.id);

    if (vecDodato) {
      alert(`Destinacija "${destinacija.naziv}" je već u vašem putu!`);
      return; 
    }

    tripManager.addTrip(destinacija);
    setMojPut([...tripManager.getTrips()]);
    alert(`Uspešno dodato: ${destinacija.naziv}`);
  };

  const postaviKorisnika = (user: IUser | null) => {
    setKorisnik(user);
  };

  return (
    <AppContext.Provider value={{ mojPut, dodajUPut, korisnik, postaviKorisnika }}>
      {children}
    </AppContext.Provider>
  );
};