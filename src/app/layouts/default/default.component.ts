import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DefaultComponent {
  title: string = 'Proyecto demo';
}
