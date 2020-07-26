import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DarkModeService } from 'src/app/services/dark-mode.service';
import { theme } from './themes'

declare var google;
@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss'],
})
export class GoogleMapComponent implements OnInit {
  map: any;
  constructor(private platform: Platform, public darkModeService: DarkModeService) { }

  async ngOnInit() {
    await this.platform.ready();
    await this.initMap();
  }
  async initMap() {
   
    this.map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 14.587249, lng: -90.543977},
      zoom: 12,
      streetViewControl: false,
      fullscreenControl: false,
      zoomControl: false,
      mapType:false
    });
    this.setTheme();
  }

  setTheme() {
    this.darkModeService.darkMode.subscribe(response => {
      if (response.dark) {
       this.map.setOptions({styles: theme.darkTheme});
      } else {
        this.map.setOptions({styles: theme.standar});
      }
    });
  }
  

}
