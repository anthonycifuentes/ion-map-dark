import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private theme: BehaviorSubject <any>;
  public darkMode: Observable <any>;
  constructor() {
    this.theme = new BehaviorSubject <any> (JSON.parse(localStorage.getItem('theme')) || {dark: true});
    this.darkMode = this.theme.asObservable();
   }

  enableDarkMode() {
    if(JSON.parse(localStorage.getItem('theme'))){
      let darkMode:boolean = JSON.parse(localStorage.getItem('theme')).dark; 
      this.toggleDarkTheme(darkMode);
      this.theme.next({
        dark: darkMode
      });
    } else {
      this.toggleDarkTheme(false);
      this.theme.next({
        dark: false
      });
    }
   }

   
  toggleDarkTheme(dark) {
    // Add or remove the "dark" class 
    document.body.classList.toggle('dark', dark);
    localStorage.setItem('theme', JSON.stringify({
      dark
    }));
    this.theme.next({ dark });
  }


}
