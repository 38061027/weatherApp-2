import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { map, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weather-app-2';
  cityName: string = '';
  data: any

  constructor(private service: DataService) { }


  ngOnInit(): void {
    this.getWeather('maringa')
  }

  getWeather(city: string) {
    this.service.getWeather(city).pipe(
      map(el => {
        el.main.temp = el.main.temp.toFixed(0) + ' ºC';
        el.main.temp_min = el.main.temp_min.toFixed(0) + ' ºC';
        el.main.temp_max = el.main.temp_max.toFixed(0) + ' ºC';
        el.weather[0].iconURL = `http://openweathermap.org/img/wn/${el.weather[0].icon}.png`; 
        return el;
      })
    ).subscribe(res => {
      this.data = res;
      console.log(res);
    });
  }

}



