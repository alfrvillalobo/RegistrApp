import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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

  constructor(private router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  async mostrarAlertaRegistroExitoso() {
    const alert = await this.alertController.create({
      header: 'Registro Exitoso',
      message: 'Su registro ha sido realizado correctamente.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl('/login'); 
          }
        }
      ]
    });
  
    await alert.present();
  }

  registro() {
    console.log('Registrar:', this.userData);

    this.mostrarAlertaRegistroExitoso();
  }

  logOut() {
    this.router.navigateByUrl('home');
  }
}
