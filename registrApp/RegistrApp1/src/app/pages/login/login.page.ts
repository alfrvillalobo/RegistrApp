import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = "";
  contrasena:string = "";

  constructor(private router:Router, private helperService:HelperService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  logOut(){
    this.router.navigateByUrl("home");
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Bienvenido Profesor',
      message: '¡Has iniciado sesión con éxito!',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.router.navigateByUrl("main"); 
        }
      }]
    });

    await alert.present();
  }

  login() {
    if (this.email == "") {
      this.helperService.showAlert("Debe ingresar un email", "Advertencia");
      return;
    }
    if (this.contrasena == "") {
      this.helperService.showAlert("Debe ingresar una contraseña", "Advertencia");
      return;
    }

    if (this.email == "micorreo" && this.contrasena == "123") {
      this.presentAlert(); 
    } else {
      this.helperService.showAlert("Credenciales no válidas", "Error");
    }
  }

  registro() {
    this.router.navigateByUrl("registro");
  }

  recuperar(){
    this.router.navigateByUrl("recuperar-clave");
    
    }
}
