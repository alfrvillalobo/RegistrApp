import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private loadingController: LoadingController
  ) { }

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
          handler: async () => {
            const loading = await this.loadingController.create({
              message: 'Escaneando...',
              spinner: 'crescent',
            });

            await loading.present();

            
            setTimeout(() => {
              loading.dismiss(); 
              this.navCtrl.navigateForward('/qr-response');
            }, 2000);
          }
        }
      ]
    });
  
    await alert.present();
  }

}
