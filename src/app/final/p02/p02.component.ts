import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-p02',
  templateUrl: './p02.component.html',
  styleUrls: ['./p02.component.css']
})
export class P02Component implements OnInit {
  user: any;

  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.user = this.tokenStorage.getUser();
    } else {
      this.router.navigate(['/final/p01']);
    }
  }
}
