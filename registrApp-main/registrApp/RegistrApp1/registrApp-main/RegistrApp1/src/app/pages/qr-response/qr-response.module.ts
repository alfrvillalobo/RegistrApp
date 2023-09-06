import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QRResponsePageRoutingModule } from './qr-response-routing.module';

import { QRResponsePage } from './qr-response.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QRResponsePageRoutingModule
  ],
  declarations: [QRResponsePage]
})
export class QRResponsePageModule {}
