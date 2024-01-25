import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-down',
  templateUrl: './navbar-down.component.html',
  styleUrls: ['./navbar-down.component.scss']
})
export class NavbarDownComponent {
  buttonPartite: boolean = true; //Stato del bottone partite
  buttonClassifiche: boolean = false; //Stato del bottone classifiche
  buttonPreferiti: boolean = false; //Stato del bottone preferiti
  buttonBlog: boolean = false; //Stato del bottone blog

  //Gestore dell'accordion delle sezioni del menu
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
