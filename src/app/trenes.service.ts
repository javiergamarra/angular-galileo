import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrenesService {

  constructor(private httpClient: HttpClient) { }

  getTrenes() {
    return this.httpClient.get(`https://swapi.dev/api/people`).toPromise().then((x:any) => x.results);
  }
}
