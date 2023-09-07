import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = "";
  contrasena: string = "";

  constructor(private router: Router, private helperService: HelperService, private alertCtrl: AlertController, private loadingController: LoadingController) {}

  ngOnInit() {}

  logOut() {
    this.router.navigateByUrl("home");
  }

  async login() {
    const loading = await this.loadingController.create({
      message: 'Iniciando sesión...', 
    });

    
    await loading.present();

    setTimeout(async () => {
      
      if (this.email == "") {
        this.helperService.showAlert("Debe ingresar un email", "Advertencia");
        loading.dismiss(); 
        return;
      }
      if (this.contrasena == "") {
        this.helperService.showAlert("Debe ingresar una contraseña", "Advertencia");
        loading.dismiss(); 
        return;
      }
    
      if (this.email == "pgy4121-002d" && this.contrasena == "pgy4121-002d") {
        this.presentAlert();
        loading.dismiss();
      } else {
        this.helperService.showAlert("Credenciales no válidas", "Error");
        loading.dismiss();
      }
    }, 3000); 
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Bienvenido Benjamin',
      message: '¡Has iniciado sesión con éxito!',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl("main");
          },
        },
      ],
    });

    await alert.present();
  }

  registro() {
    this.router.navigateByUrl("registro");
  }

  recuperar() {
    this.router.navigateByUrl("recuperar-clave");
  }
}