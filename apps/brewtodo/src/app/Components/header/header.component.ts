import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Breweries';
  hasNotCheckedUser = true;

  constructor(private authService: AuthService, private userService: UserService) {
  }

  ngOnInit() {}

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  login() {
    return this.authService.login();
  }

  logout() {
    return this.authService.logout();
  }

  getProfile() {
    const user =  this.authService.getProfile();
    if(user && this.hasNotCheckedUser === true){
      this.authService.upsertUser(user.name);
      this.hasNotCheckedUser = false
    }
    return user;
  }

  checkIfUserExists(){

  }
  
}