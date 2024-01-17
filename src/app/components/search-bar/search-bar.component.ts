import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
