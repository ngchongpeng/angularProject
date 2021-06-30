import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-p01',
  templateUrl: './p01.component.html',
  styleUrls: ['./p01.component.css']
})
export class P01Component implements OnInit {
  form: any = {};
  isLoggedIn = false;
  roles: string[] = [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit() {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoggedIn = true;
        this.authService.isLoggedIn.next(true);
        this.router.navigate(['final/p02']);
      },
      err => {
        alert('Signin failed. Please try again!');
      }
    );
  }
}
