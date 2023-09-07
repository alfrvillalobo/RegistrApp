import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-recuperar-clave',
  templateUrl: './recuperar-clave.page.html',
  styleUrls: ['./recuperar-clave.page.scss'],
})
export class RecuperarClavePage implements OnInit {

  constructor(private router:Router, private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Recuperaracion',
      message: 'Se ha enviado un mensaje de recuperación a su correo.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });
  
    await alert.present();
  }

}
