import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Lego } from 'src/app/MODELS/CLASSES/Lego';

@Component({
  selector: 'app-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrls: ['./detail-modal.component.scss'],
  standalone: true,
  imports: [CommonModule]

})
export class DetailModalComponent  implements OnInit {

  public item: Lego | undefined;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    ) {
    }
    
    ngOnInit() {
    this.item = this.navParams.get('data');
    console.log("item:", this.item);

  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
