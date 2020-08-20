import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  url = 'http://api.openweathermap.org/data/2.5/weather?&appid=';
  key = '8bb60d73a9b56e4122b9526096c73a73';

  constructor(private http: HttpClient) { }

  getClima(ciudad: string): Observable<any> {
    return this.http.get(this.url + this.key + '&q=' + ciudad)

  }
}
