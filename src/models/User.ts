// src/models/User.ts

export interface IUser {
  ime: string;
  email: string;
  lozinka: string;
}

export class AuthService {
  // Cuva korisnika u memoriji
  register(user: IUser): void {
    sessionStorage.setItem('korisnik', JSON.stringify(user));
  }

  // Proverava da li se email i lozinka poklapaju sa sacuvanim
  login(email: string, lozinka: string): IUser | null {
    const podaci = sessionStorage.getItem('korisnik');
    if (podaci) {
      const sacuvanKorisnik: IUser = JSON.parse(podaci);
      if (sacuvanKorisnik.email === email && sacuvanKorisnik.lozinka === lozinka) {
        return sacuvanKorisnik;
      }
    }
    return null;
  }

  logout(): void {
    sessionStorage.removeItem('korisnik');
  }

  // Cita trenutno ulogovanog korisnika (ako postoji)
  getCurrentUser(): IUser | null {
    const podaci = sessionStorage.getItem('korisnik');
    return podaci ? JSON.parse(podaci) : null;
  }
}