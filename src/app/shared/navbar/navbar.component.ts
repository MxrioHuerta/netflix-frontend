import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
})
export class NavbarComponent implements OnInit {
  navBackground: any = {
    'background-color': 'rgba(14,14,14,0.80)'
  };
  loggedIn = false;
  constructor (private userService: UserService, private router: Router) { }

  ngOnInit (): void {
    this.userService.authState.subscribe((user: User | null) => {
      this.loggedIn = !!user;
    });
  }

  onClick () {
    this.userService.logout()
      .then(() => {
        this.router.navigate([ '/login' ]);
      })
      .catch((error: any) => console.log(error));
  }
}
