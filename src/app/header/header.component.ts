import { Component, DoCheck, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  username: string;
  roles: string[];
  showModeratorBoard: boolean = false;
  showAdminBoard: boolean = false;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorage.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
