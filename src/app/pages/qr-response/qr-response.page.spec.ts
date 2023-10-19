import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QRResponsePage } from './qr-response.page';

describe('QRResponsePage', () => {
  let component: QRResponsePage;
  let fixture: ComponentFixture<QRResponsePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(QRResponsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
