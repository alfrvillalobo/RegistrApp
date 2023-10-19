import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QRResponsePage } from './qr-response.page';

const routes: Routes = [
  {
    path: '',
    component: QRResponsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QRResponsePageRoutingModule {}
