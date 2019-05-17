import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { filter } from 'rxjs/operators';
import { AuthenticationService } from './core';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  constructor(public authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  loggedIn: boolean;

  ngOnInit(): void {
    this.loggedIn = !this.authService.isTokenExpired;
    this.authService.isAuthenticated$
      .pipe(filter(a => a !== undefined))
      .subscribe(a => {
        this.loggedIn = a;
        if (!a) {
          this.router.navigate(['./login'], { relativeTo: this.route });
        }
      });
  }
}
