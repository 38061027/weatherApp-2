import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-app-2';
  cityName: string = '';
  imgCloud : string = ''
  data:any

  constructor(private service: DataService){}


  ngOnInit(): void {
    console.log(this.imgCloud)
  }

    getWeather(city:string){
      this.service.getWeather(city).subscribe(res => {
        this.data = res
        console.log(res)
        const apiCountryURL = `http://openweathermap.org/img/wn/${res.weather[0].icon}.png`;
       this.imgCloud+=apiCountryURL
        console.log(apiCountryURL)
     
      })

    }

  


}



