import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDatepickerInputEvent, MatDatepicker } from '@angular/material/datepicker';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  currentDate: DateTime = DateTime.now();
  @ViewChild('picker') picker!: MatDatepicker<Date>;

  onDateInput(event: MatDatepickerInputEvent<DateTime>): void {
    this.currentDate = event.value || DateTime.now();
  }

  previousDay(event: Event) {
    event.stopPropagation();
    this.currentDate = this.currentDate.minus({ days: 1 }); // Utilizza il metodo minus di Luxon
    
  }
  
  nextDay(event: Event) {
    event.stopPropagation();
    this.currentDate = this.currentDate.plus({ days: 1 }); // Utilizza il metodo plus di Luxon
  }

  openPicker() {
    if (this.picker) {
      this.picker.open();
    }
  }         
}
