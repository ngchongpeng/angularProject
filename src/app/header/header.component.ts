import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
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

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.refreshHeader();

    this.authService.isLoggedIn.subscribe(
      info => {
        this.refreshHeader();
      }
    )
  }

  refreshHeader() {
    if (this.tokenStorage.getToken()) {
      const user = this.tokenStorage.getUser();
      this.isLoggedIn = true;
      this.username = user.username;
      this.showAdminBoard = user.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = user.roles.includes('ROLE_MODERATOR');
    } else {
      this.isLoggedIn = false;
      this.username = null;
      this.showAdminBoard = false;
      this.showModeratorBoard = false;
    }
  }

  logout() {
    this.tokenStorage.signOut();
    this.authService.isLoggedIn.next(false);
    this.router.navigate(['final/p01']);
  }
}
