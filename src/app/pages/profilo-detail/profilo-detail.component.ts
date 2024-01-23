import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_service/api.service';
import { AuthService, User } from 'src/app/_service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profilo-detail',
  templateUrl: 'profilo-detail.component.html',
  styleUrls: ['./profilo-detail.component.scss']
})

export class ProfiloDetailComponent implements OnInit {

  user: User | null = null;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserData().subscribe((user) => {
      this.user = user;
    });
  }
}