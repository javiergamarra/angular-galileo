import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrenesService {

  constructor() { }

  getTrenes() {
    return [{nombre: 'Tren 1', id: 1}, {nombre: 'Tren 2', id: 2}, {nombre: 'Tren 3', id: 3}];
  }
}
