import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Observable, of, from, throwError } from "rxjs";
import { map, catchError, filter } from "rxjs/operators";

import { DataServiceFactory, DataService } from "../core";
import { ProfileModel } from "./profile-model";
import { ProfileService } from "./profile.service";
import { Street } from '../core/model/streets';

@Component({
  selector: "app-profile",
  templateUrl: "./app-profile.component.html",
  styleUrls: ["./app-profile.component.scss"],
  providers: [
    DataServiceFactory,
    ProfileService
  ]
})
export class AppProfileComponent implements OnInit {

  constructor(private factory: DataServiceFactory,
    private profileService: ProfileService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  selectedProfile$: Observable<ProfileModel>;
  profiles$: Observable<ProfileModel[]>;
  streets$: Observable<Street[]>;

  async ngOnInit() {
    this.streets$ = this.factory.create('Streets')
      .getEntities<Street>();
    //emit ({name: 'Joe', age: 31}, {name: 'Bob', age:25})
    const source = from([{ name: 'Joe', age: 31 },
    { name: 'Bob', age: 25 },
    { name: 'Rich', age: 39 }]);
    //filter out people with age under 30
    source.pipe(filter(person => person.age >= 30)).subscribe(s => console.log(s));
    let dataSource:any;
    // await this.factory.create('Streets')
    //   .getSomething<Street>()
    //   .pipe(
    //     filter(s => {console.log(s); return s.id === 17;})
    //   )
    //   .subscribe(s =>console.log('es'+s));
      // .subscribe(s =>
      //   dataSource = s.filter(s => s.name === "El Saltito")
      //     .map(s => ({ text: s.name, value: s.name }))
      // );

    this.selectedProfile$ = this.profileService.selectedProfile$;
    //  this.test({p1:'222', p2: '333'});
  }

  private test(params: {}) {
    let validationErrors: { [propertyName: string]: Object } = {};
    for (let p in params) { console.log(params[p]) };
  }

  navigate(profile: ProfileModel) {
    this.profileService.selectProfile(profile.id)
      .then(() =>
        this.router.navigate(['./overview'], { relativeTo: this.route }));
  }

  streetSelected(value: string) {
    this.profiles$ = this.factory.create('ProfilesSearch').getEntities<ProfileModel>({ streetId: value });
  }
}
