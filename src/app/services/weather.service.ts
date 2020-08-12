import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey='78a47c569a44f400a84dc70d66805587';
  URI:string ='';

  constructor(private http: HttpClient) {
        this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`;
   }
   getWeather(cityName:string, countryCode:string){
      return  this.http.get(`${this.URI}${cityName},${countryCode}`);
   }
}
