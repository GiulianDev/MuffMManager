import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Lego } from 'src/app/MODELS/CLASSES/Lego';
import { LegoService } from 'src/app/SERVICES/lego.service';
import { PartialComponent } from 'src/app/COMPONENTS/partial/partial.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, PartialComponent]
})
export class HOMEPage implements OnInit {

  public legoList: Lego[] = [];

  public dialogVisible = true;

  constructor(private legoService: LegoService) {
    LegoService
  }

  ngOnInit() {
    this.legoList = this.legoService.getFakeLegoList();
  }

  addItem(): void {

  }

}
