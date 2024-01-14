import { Component, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  isExpanded = false;
    
  constructor(private ApiService: ApiService) {}
  
  expand(): void {
    this.isExpanded = !this.isExpanded;
  }

}
