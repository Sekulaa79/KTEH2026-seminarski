export interface IDestination {
  id: string;
  naziv: string;
  slika: string;
  datum?: string; 
  region?: string;
  cena?: number;     
  trajanje?: number; 
}

export class TripManager {
  private trips: IDestination[] = [];

  addTrip(trip: IDestination): void {
    this.trips.push(trip);
  }

  getTrips(): IDestination[] {
    return this.trips;
  }
}

