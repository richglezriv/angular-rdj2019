import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: "app-nav-bar",
  templateUrl: "./app-nav-bar.component.html"
})
export class AppNavBarComponent implements OnInit {

  breadCrumb: Observable<any>;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // console.log(this.route);
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(event => {
        if (!this.route.firstChild) {
          return;
        }
        this.route.firstChild.data
          .pipe(filter(d => !!d))
          .subscribe(c => console.log(c));
        this.breadCrumb = this.route.firstChild.data;
      });
    if (this.route.firstChild) {
      this.route.firstChild.data
        .pipe(filter(d => !!d))
        .subscribe(d => console.log(d));

    }
  }
}