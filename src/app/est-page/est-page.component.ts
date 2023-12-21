import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-est-page',
  templateUrl: './est-page.component.html',
  styleUrls: ['./est-page.component.scss'],
})
export class EstPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.generateRows();
  }

  generateRows(): void {
    function createRow(
      position: number,
      nameTeam: string,
      gamePlayed: string,
      win: string,
      lose: string,
      percWIn: string
    ): HTMLTableRowElement {
      const row = document.createElement('tr');
      row.classList.add('w-full', 'h-28', 'flex', 'justify-evenly');

      const cell1 = document.createElement('td');
      cell1.classList.add('w-1/3', 'h-10', 'text-center');
      // cell1.textContent = team1;
      row.appendChild(cell1);

      const cell2 = document.createElement('td');
      cell2.classList.add('w-1/3', 'h-10', 'text-center');
      // cell2.textContent = score;
      row.appendChild(cell2);

      const cell3 = document.createElement('td');
      cell3.classList.add('w-1/3', 'h-10', 'text-center');
      // cell3.textContent = team2;
      row.appendChild(cell3);

      const cell4 = document.createElement('td');
      cell1.classList.add('w-1/3', 'h-10', 'text-center');
      // cell1.textContent = team1;
      row.appendChild(cell4);

      const cell5 = document.createElement('td');
      cell2.classList.add('w-1/3', 'h-10', 'text-center');
      // cell2.textContent = score;
      row.appendChild(cell5);

      const cell6 = document.createElement('td');
      cell3.classList.add('w-1/3', 'h-10', 'text-center');
      // cell3.textContent = team2;
      row.appendChild(cell6);

      return row;
    }

    const tableBody = document.getElementById('tableBody');
    if (tableBody) {
       for (let i = 0; i < 10; i++) {
         const newRow = createRow();
       tableBody.appendChild(newRow);
    }
  }
}

// for (let i = 0; i < 10; i++) {
//   const newRow = createRow(
//     `Squadra ${i + 1}`,
//     `${Math.floor(Math.random() * 5)} - ${Math.floor(Math.random() * 5)}`,
//     `Squadra ${i + 2}`
//   );
// tableBody.appendChild(newRow);