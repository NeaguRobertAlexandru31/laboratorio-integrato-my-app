import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risultati-page',
  templateUrl: './risultati-page.component.html',
  styleUrls: ['./risultati-page.component.scss']
})
export class RisultatiPageComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
    this.generateRows();
  }

  generateRows(): void{
    const tableBody = document.getElementById("tableBody");
    if(tableBody){
      for(let i = 0; 1 < 10; i++){
        const newRow = this.createRow();
        tableBody.appendChild(newRow);
      }
    }
  }

  createRow(): HTMLTableRowElement{
    const row = document.createElement("tr");
    row.classList.add('w-full', 'h-28', 'flex', 'justify-evenly');

    for (let i = 0; i < 3; i++) {
      const cell = document.createElement('td');
      cell.classList.add('w-1/3', 'h-10', 'text-center');
      cell.textContent = 'Contenuto';
      row.appendChild(cell);
    }

    return row;
  }
}
