import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
  standalone: true,
  imports: [CommonModule]

})
export class CurrencyComponent {
  @Input() value: number = 0;
  @Input() colored: boolean = true;

  constructor() { }

}
