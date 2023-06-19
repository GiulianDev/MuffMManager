import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Lego } from 'src/app/MODELS/CLASSES/Lego';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HOMEPage implements OnInit {

  public legoList = ["Lego 1", "Lego 2", "Lego 3", "Lego 4", "Lego 5"];

  public dialogVisible = false;

  constructor() { }

  ngOnInit() {
  }

  addItem(): void {

  }

}
