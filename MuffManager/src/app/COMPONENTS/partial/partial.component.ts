import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'partial',
  templateUrl: './partial.component.html',
  styleUrls: ['./partial.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]

})
export class PartialComponent {

  @Input() value: number = 0;

  constructor() { }

  ngOnInit() {}

}
