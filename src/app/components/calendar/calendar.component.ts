import { Component, ViewChild, Output, EventEmitter, OnInit } from '@angular/core';
import { MatDatepickerInputEvent,MatDatepicker } from '@angular/material/datepicker';
import { map } from 'rxjs/operators';
import { DateTime } from 'luxon';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [DatePipe],
})
export class CalendarComponent implements OnInit{
  currentDate: DateTime = DateTime.now();
  @ViewChild('picker') picker!: MatDatepicker<Date>;

  @Output() sendDateEvent = new EventEmitter<Date>();

  selectedDate: Date;
  apiService: any;
  games: any;

  constructor(private route: ActivatedRoute) {
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      const page = params[''];

      console.log(page)

      // if(page === '/partite/risultati') {

      // } else if (page === '2') {

      // }
    });
  }
}