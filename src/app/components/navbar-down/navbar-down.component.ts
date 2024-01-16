import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-down',
  templateUrl: './navbar-down.component.html',
  styleUrls: ['./navbar-down.component.scss']
})
export class NavbarDownComponent {
  buttonPartite: boolean = true;
  buttonClassifiche: boolean = false;
  buttonPreferiti: boolean = false;
  buttonBlog: boolean = false;

  activePage(page:string){
    if(page == 'partite'){
      this.buttonPartite = true;
      this.buttonClassifiche = false;
      this.buttonPreferiti = false;
      this.buttonBlog = false;    
    }
    if(page == 'classifiche'){
      this.buttonPartite = false;
      this.buttonClassifiche = true;
      this.buttonPreferiti = false;
      this.buttonBlog = false;    
    }
    if(page == 'preferiti'){
      this.buttonPartite = false;
      this.buttonClassifiche = false;
      this.buttonPreferiti = true;
      this.buttonBlog = false;    
    }
    if(page == 'blog'){
      this.buttonPartite = false;
      this.buttonClassifiche = false;
      this.buttonPreferiti = false;
      this.buttonBlog = true;    
    }
  }
}
