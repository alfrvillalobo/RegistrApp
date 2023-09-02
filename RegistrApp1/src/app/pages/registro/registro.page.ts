import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//import { NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  userData = {
    nombre: '',
    rut: '',
    email: '',
    carrera: '',
    sede: '',
    contrasena: '',
  };

  constructor(private router:Router) { }

  ngOnInit() {
  }

  registro(){
    console.log('Registrar:', this.userData);
  }

  logOut(){
    this.router.navigateByUrl("home");
  }

}
