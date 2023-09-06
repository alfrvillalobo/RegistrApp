import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }


  async showQRAlert() {
    const alert = await this.alertController.create({
      header: 'RegistrApp',
      message: '¿Desea escanear un código QR?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.navigateForward('/qr-response');
          }
        }
      ]
    });
  
    await alert.present();
  }



}
