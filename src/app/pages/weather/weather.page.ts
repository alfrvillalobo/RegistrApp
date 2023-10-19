import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/app/weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherPage {
  private apiKey = 'e6de68cbf706be50f74669428abef364';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient,
              private weatherService:WeatherService) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric`; // Puedes ajustar las unidades según tus preferencias
    return this.http.get(url);
  }
}
