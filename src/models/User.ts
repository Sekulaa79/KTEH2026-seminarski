// src/models/User.ts

export interface IUser {
  ime: string;
  email: string;
  lozinka: string;
}

export class AuthService {
  // Registracija: Dodajemo korisnika u "bazu" (niz svih korisnika)
  register(user: IUser): void {
    const postojeci = sessionStorage.getItem('sviKorisnici');
    const korisnici: IUser[] = postojeci ? JSON.parse(postojeci) : [];
    korisnici.push(user);
    
    sessionStorage.setItem('sviKorisnici', JSON.stringify(korisnici));
    
    // Odmah nakon registracije, korisnik je automatski prijavljen
    sessionStorage.setItem('trenutniKorisnik', JSON.stringify(user));
  }

  // Login: Trazimo korisnika u "bazi" svih registrovanih
  login(email: string, lozinka: string): IUser | null {
    const postojeci = sessionStorage.getItem('sviKorisnici');
    if (postojeci) {
      const korisnici: IUser[] = JSON.parse(postojeci);
      // find metoda vraca korisnika ako se email i lozinka poklapaju
      const pronadjen = korisnici.find(k => k.email === email && k.lozinka === lozinka);
      
      if (pronadjen) {
        // Ako je pronadjen, belezimo da je to trenutni korisnik
        sessionStorage.setItem('trenutniKorisnik', JSON.stringify(pronadjen));
        return pronadjen;
      }
    }
    return null;
  }

  // Odjava: Brisemo samo aktivnu sesiju, ali nalozi ostaju u bazi
  logout(): void {
    sessionStorage.removeItem('trenutniKorisnik');
  }

  // Citanje trenutnog korisnika za potrebe Context-a
  getCurrentUser(): IUser | null {
    const podaci = sessionStorage.getItem('trenutniKorisnik');
    return podaci ? JSON.parse(podaci) : null;
  }
}


