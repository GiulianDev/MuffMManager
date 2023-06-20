import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { Lego } from 'src/app/MODELS/CLASSES/Lego';
import { LegoService } from 'src/app/SERVICES/lego.service';
import { DetailModalComponent } from 'src/app/COMPONENTS/detail-modal/detail-modal.component';
import { TotalComponent } from 'src/app/COMPONENTS/total-component/total.component';
import { CurrencyComponent } from 'src/app/COMPONENTS/currency/currency.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CurrencyComponent, TotalComponent]
})
export class HOMEPage implements OnInit {


  public legoList: Lego[] = [];
  // public openLego: Lego[] = [];
  // public closedLego: Lego[] = [];
  public total = this.legoService.Total;

  public dialogVisible = true;

  constructor(
    private legoService: LegoService,
    private modalController: ModalController) {}

  ngOnInit() {
    this.legoList = this.legoService.getFakeLegoList();

    // this.legoList.forEach(element => {
    //   if (element.closed = true) {
    //     this.closedLego.push(element);
    //   } else {
    //     this.openLego.push(element);
    //   }
    // });
  }

  addItem(): void {
  }

  async presentModal(item: Lego) {
    console.log("item:", item);
    
    const modal = await this.modalController.create({
      component: DetailModalComponent,
      componentProps: { data: item }
    });
    await modal.present();
  }


  
  
}
