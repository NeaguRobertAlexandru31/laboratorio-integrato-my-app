import { Component, OnInit } from '@angular/core';
import { ApiService } from './_service/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'HoopsData';

  constructor(){

  }

  ngOnInit(): void {
    sessionStorage
  }
  
}
