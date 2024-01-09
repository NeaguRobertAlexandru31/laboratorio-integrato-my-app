import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent, MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  currentDate: Date = new Date();
  @ViewChild('picker') picker!: MatDatepicker<Date>;

  onDateInput(event: MatDatepickerInputEvent<Date>): void {
    this.currentDate = event.value || new Date();
  }

  previousDay(event: Event) {
    event.stopPropagation();
    this.currentDate = new Date(this.currentDate.getTime() - (24 * 60 * 60 * 1000));
  }
  
  nextDay(event: Event) {
    event.stopPropagation();
    this.currentDate = new Date(this.currentDate.getTime() + (24 * 60 * 60 * 1000));
  }

  openPicker() {
    if (this.picker) {
      this.picker.open();
    }
  }
}
