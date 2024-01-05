import { Component } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-ovest-page',
  templateUrl: './ovest-page.component.html',
  styleUrls: ['./ovest-page.component.scss']
})
export class OvestPageComponent {
  nome: any[] = [];
  currentDate: Date = new Date;

  constructor(private apiService: ApiService) {}

  ngOnInit(){
    this.apiService.getAll().subscribe( (response) => { //esegue la chiamata a getMeteo
      this.nome = response;
    });
  }
}
