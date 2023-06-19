// templateUrl: './custom-alert.component.html',

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-alert.component.html',
  styleUrls: ['./custom-alert.component.scss'],
  standalone: true
})
export class CustomDialogComponent {
  @Input()
  show: boolean = false;
}

