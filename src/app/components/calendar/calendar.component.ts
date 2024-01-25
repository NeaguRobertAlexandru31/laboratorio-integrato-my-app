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

  //Funzione per la gestione dei cambiamenti della data
  onDateInput(event: MatDatepickerInputEvent<DateTime>): void {
    this.currentDate = event.value || DateTime.now(); //Inizzializza la data con il dato inserito o genera la data attuale
  }
  
  //Funzione per la gestione dei cambiamenti generici 
  onChange(event: any) {
    this.currentDate = DateTime.fromJSDate(event.value); // Converte il valore dell'input in Luxon DateTime
    this.sendDateEvent.emit(this.selectedDate); // Emette il dato all'esterno
  }

  //Funzione per l'incremento della data
  incrementDate() {
    let currentDate = this.selectedDate || new Date(); //Seleziona la data attuale o la genera 
    currentDate.setDate(currentDate.getDate() + 1); //Incrementa la data
    this.selectedDate = new Date(currentDate); //Inizzializza la data precedentemente creata con il valore incrementato
    this.sendDateEvent.emit(this.selectedDate); //La data viene emessa all'esterno del componente
  }

  //Funzione per il decremento della data
  reduceDate() {
    let currentDate = this.selectedDate || new Date(); //Seleziona la data attuale o la genera 
    currentDate.setDate(currentDate.getDate() - 1); //Decrementa la data
    this.selectedDate = new Date(currentDate); //Inizzializza la data precedentemente creata con il valore decrementato
    this.sendDateEvent.emit(this.selectedDate); //La data viene emessa all'esterno del componente
  }

  //Funzione per quando si seleziona una data dal calendario
  openPicker() {
    if (this.picker) {
      this.picker.open();
    }
  }

  ngOnInit() {

  }
}