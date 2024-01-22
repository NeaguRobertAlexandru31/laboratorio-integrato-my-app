import { Component } from '@angular/core';
import { AuthService } from '../../_service/auth.service';  // Assicurati di inserire il percorso corretto

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
