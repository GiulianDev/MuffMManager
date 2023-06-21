import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Lego } from 'src/app/MODELS/CLASSES/Lego';
import { CurrencyComponent } from '../currency/currency.component';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, CurrencyComponent]

})
export class DetailModalComponent {

  public item: Lego = this.navParams.get('data');

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    ) {}
    
  // ngOnInit() {
  //   this.item = this.navParams.get('data');
  //   console.log("item:", this.item);
  // }

  dismissModal() {
    this.modalController.dismiss();
  }

}
