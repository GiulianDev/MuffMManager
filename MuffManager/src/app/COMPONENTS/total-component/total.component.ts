import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TotalComponent  implements OnInit {
  @Input() value: number = 0;

  constructor() { }

  ngOnInit() {}

}
