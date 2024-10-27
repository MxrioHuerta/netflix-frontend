import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'netflix-frontend';

  // constructor(private authService: AuthService) {}
  //
  // ngOnInit() {
  //   this.authService.getUser().subscribe(user => {
  //     if (user) {
  //       console.log('User is logged in:', user);
  //     } else {
  //       console.log('No user is logged in');
  //     }
  //   });
  // }
}
