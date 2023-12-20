import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  template: `
  <input
    type="text"
    mwlFlatpickr
    [altInput]="true"
    [convertModelValue]="true"
  />
`,
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {
selectedDate: any;

}
