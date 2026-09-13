import React, { createContext, useState, ReactNode } from 'react';
import { IDestination, TripManager } from '../models/Destination';
import { IUser, AuthService } from '../models/User';

// Definišemo šta naš Context sadrži
interface AppContextType {
  mojPut: IDestination[];
  dodajUPut: (destinacija: IDestination) => void;
  korisnik: IUser | null;
  postaviKorisnika: (user: IUser | null) => void;
}

// Inicijalizujemo Context
export const AppContext = createContext<AppContextType>({
  mojPut: [],
  dodajUPut: () => {},
  korisnik: null,
  postaviKorisnika: () => {}
});

// Instanciramo klasu
const tripManager = new TripManager();
const authService = new AuthService(); // Inicijalizujemo drugu klasu

export const AppProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [mojPut, setMojPut] = useState<IDestination[]>(tripManager.getTrips());
  // Prilikom ucitavanja aplikacije, proveravamo da li u memoriji vec postoji korisnik
  const [korisnik, setKorisnik] = useState<IUser | null>(authService.getCurrentUser());

  const dodajUPut = (destinacija: IDestination) => {
    if (!korisnik) {
      alert("Morate se prijaviti da biste dodali putovanje!");
      return;
    }
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

  const postaviKorisnika = (user: IUser | null) => {
    setKorisnik(user);
  };

  return (
    <AppContext.Provider value={{ mojPut, dodajUPut, korisnik, postaviKorisnika }}>
      {children}
    </AppContext.Provider>
  );
};