import { Component } from '@angular/core';
import { ApiService } from './_service/api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  searchForm: FormGroup = new FormGroup({
    search: new FormControl('')
  })

  public termList:Array<any> = [];

  constructor(private apiService: ApiService){

  }
}
