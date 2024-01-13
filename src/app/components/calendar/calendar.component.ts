import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import {
  MatDatepickerInputEvent,
  MatDatepicker,
} from '@angular/material/datepicker';
import { DateTime } from 'luxon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [DatePipe],
})
export class CalendarComponent {
  currentDate: DateTime = DateTime.now();
  @ViewChild('picker') picker!: MatDatepicker<Date>;

  @Output() sendDateEvent = new EventEmitter<Date>();

  selectedDate: Date;
  apiService: any;
  games: any;

  constructor() {
    this.selectedDate = new Date();
  }

  onDateInput(event: MatDatepickerInputEvent<DateTime>): void {
    this.currentDate = event.value || DateTime.now();
  }
  
  onChange(event: any) {
    this.currentDate = DateTime.fromJSDate(event.value);
    this.sendDateEvent.emit(this.selectedDate);
  }

  incrementDate() {
    let currentDate = this.selectedDate || new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    this.selectedDate = new Date(currentDate);
    this.sendDateEvent.emit(this.selectedDate);
  }

  reduceDate() {
    let currentDate = this.selectedDate || new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    this.selectedDate = new Date(currentDate);
    this.sendDateEvent.emit(this.selectedDate);
  }

  openPicker() {
    if (this.picker) {
      this.picker.open();
    }
  }
}
