import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../_service/auth.service'; // Assicurati di utilizzare il percorso corretto
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-top',
  templateUrl: './navbar-top.component.html',
  styleUrls: ['./navbar-top.component.scss']
})
export class NavbarTopComponent implements OnInit {

  isUserAuthenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getUserAuthenticated().subscribe((isAuthenticated) => {
      this.isUserAuthenticated = isAuthenticated;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/partite/risultati']);
  }

  getProfileLink(): string {
    return this.authService.hasToken() ? '/profilo/detail' : '/profilo';
  }

}
