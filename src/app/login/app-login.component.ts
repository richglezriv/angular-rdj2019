import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { filter} from 'rxjs/operators';
import { AuthenticationService } from '../core';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent implements OnInit {

  constructor(private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.authService.isAuthenticated$
    //   .pipe(filter(a => !!a))
    //   .subscribe(a => a);
  }

  async logIn() {
    await this.authService.authenticate('sistemas','1');
    this.router.navigate(['./welcome'], { relativeTo: this.route });
  }
}
