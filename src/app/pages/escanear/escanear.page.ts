import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { ResulQrPage } from 'src/app/modals/resul-qr/resul-qr.page';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-escanear',
  templateUrl: './escanear.page.html',
  styleUrls: ['./escanear.page.scss'],
})
export class EscanearPage implements OnInit {

  resultQr:any ='';

  constructor(private helper:HelperService) { }

  ngOnInit() {
  }

  async scan(){
    this.resultQr  = (await BarcodeScanner.scan()).code;
    console.log("obj QR",JSON.parse(this.resultQr));
    await this.modalResultQr();
  }

  async modalResultQr(){
    var qr = [];
    qr.push(this.resultQr);
    const parametros={dataQr: this.resultQr}
    await this.helper.showModal(ResulQrPage,parametros,false);
  }




}
