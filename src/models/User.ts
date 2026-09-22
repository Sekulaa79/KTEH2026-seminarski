
export interface IUser {
  ime: string;
  email: string;
  lozinka: string;
}

export class AuthService {
  
  register(user: IUser): void {
    const postojeci = sessionStorage.getItem('sviKorisnici');
    const korisnici: IUser[] = postojeci ? JSON.parse(postojeci) : [];
    korisnici.push(user);
    
    sessionStorage.setItem('sviKorisnici', JSON.stringify(korisnici));
    
    // automatska prijava
    sessionStorage.setItem('trenutniKorisnik', JSON.stringify(user));
  }

  login(email: string, lozinka: string): IUser | null {
    const postojeci = sessionStorage.getItem('sviKorisnici');
    if (postojeci) {
      const korisnici: IUser[] = JSON.parse(postojeci);
      const pronadjen = korisnici.find(k => k.email === email && k.lozinka === lozinka);
      
      if (pronadjen) {
        sessionStorage.setItem('trenutniKorisnik', JSON.stringify(pronadjen));
        return pronadjen;
      }
    }
    return null;
  }

  logout(): void {
    sessionStorage.removeItem('trenutniKorisnik');
  }

  getCurrentUser(): IUser | null {
    const podaci = sessionStorage.getItem('trenutniKorisnik');
    return podaci ? JSON.parse(podaci) : null;
  }
}


