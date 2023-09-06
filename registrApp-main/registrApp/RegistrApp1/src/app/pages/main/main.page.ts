import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  asistencia(){
    this.router.navigateByUrl("asistencia");
  }
  home(){
    this.router.navigateByUrl("home");
  }
  escanear(){
    this.router.navigateByUrl("escanear");
  }
  perfil(){
    this.router.navigateByUrl("perfil");
  }
}
