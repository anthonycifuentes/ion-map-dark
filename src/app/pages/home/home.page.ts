import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  darkMode:boolean;
  constructor(public darkModeServie: DarkModeService) {}

  ngOnInit(){
    this.darkModeServie.darkMode.subscribe(resp => {
      this.darkMode = resp.dark;
    })
  }

  setDarkTheme(dark){
    this.darkModeServie.toggleDarkTheme(dark);
  }

}
