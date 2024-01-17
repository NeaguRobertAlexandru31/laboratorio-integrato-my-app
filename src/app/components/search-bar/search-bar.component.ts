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

  jsonIn = {
    title: ""
  }

  constructor(private router:Router, private route: ActivatedRoute){}

  ngOnInit(): void{

  }

  handleSearch(event: any){
    this.router.navigate(['/list/' + this.jsonIn.title], { relativeTo: this.route });
  }

}
