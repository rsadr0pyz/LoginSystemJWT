import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserLoginService } from '../../Services/user-login.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
  public get isLoggedIn(){
    return this.userLoginService.isLoggedIn;
  }

  constructor(private userLoginService: UserLoginService) {}
}
