import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, of, from, throwError, Subject } from "rxjs";
import { map, catchError, takeUntil, filter } from "rxjs/operators";

import { DataServiceFactory, DataService } from "../core";
import { ProfileModel } from "./profile-model";
import { ProfileService } from "./profile.service";
import { Street } from '../core/model/streets';
import { TakeUntilDestroy } from '../core/decorators/unsubscribe-decorator';

@Component({
  selector: "app-profile",
  templateUrl: "./app-profile.component.html",
  styleUrls: ["./app-profile.component.scss"],
  providers: [
    DataServiceFactory,
    ProfileService
  ]
})
@TakeUntilDestroy()
export class AppProfileComponent implements OnInit {

  private destroyComponent$;

  constructor(private factory: DataServiceFactory,
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  dropDownFields: Object = { text: 'name', value: 'id' };
  profiles$: Observable<ProfileModel[]>;
  streets$: Observable<Street[]>;
  selectedId = 0;

  async ngOnInit() {
    this.streets$ = this.factory.create('Streets')
      .getEntities<Street>()
      .pipe(takeUntil(this.destroyComponent$()));

    this.profileService.selectedProfile$
      .pipe(filter(p => !!p), takeUntil(this.destroyComponent$()))
      .subscribe(p => this.selectedId = p.id);
  }

  navigate(profile: ProfileModel) {
    this.profileService.selectProfile(profile.id)
      .then(() =>
        this.router.navigate(['./overview'], { relativeTo: this.route }));
  }

  streetSelected(args) {
    this.profiles$ = this.factory.create('ProfilesSearch')
      .getEntities<ProfileModel>({
        streetId: args.itemData.id
      })
      .pipe(takeUntil(this.destroyComponent$()));
  }
}
