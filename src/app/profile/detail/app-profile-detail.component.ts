import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { ProfileService } from "../profile.service";
import { DataServiceFactory, DataService } from "../../core";
import { Street } from '../../core/model/streets';
import { TakeUntilDestroy } from '../../core';
import { Location } from '../../core/model/location';

enum ClientType {
  String = 0,
  Numeric = 1
}

@Component({
  selector: 'app-profile-detail',
  templateUrl: 'app-profile-detail.component.html'
})
@TakeUntilDestroy()
export class AppProfileDetailComponent implements OnInit {

  private destroyComponent$;
  private profile: any;
  private streetsDataService: DataService;
  private locationsDataService: DataService;

  constructor(public profileService: ProfileService,
    factory: DataServiceFactory) {
    this.streetsDataService = factory.create('Streets');
    this.locationsDataService = factory.create('Locations');
  }

  profileForm: FormGroup;
  dropDownFields: Object = { text: 'name', value: 'id' };
  streetsDataSource$: Observable<any[]>;
  locationsDataSource$: Observable<any[]>;

  ngOnInit() {

    this.initForm();
    this.initFormControls();

  }

  private initForm() {
    const metadata = [
      { propertyName: 'name', clientType: ClientType.String },
      { propertyName: 'lastName', clientType: ClientType.String },
      { propertyName: 'phone', clientType: ClientType.String },
      { propertyName: 'mobile', clientType: ClientType.String },
      { propertyName: 'email', clientType: ClientType.String },
      { propertyName: 'streetId', clientType: ClientType.Numeric },
      { propertyName: 'streetName', clientType: ClientType.String },
      { propertyName: 'placeTypeId', clientType: ClientType.Numeric },
      { propertyName: 'placeTypeName', clientType: ClientType.String }
    ];
    let formControls: { [key: string]: AbstractControl } = {};
    metadata.map(m => m.propertyName)
      .forEach(m => formControls[m] = new FormControl());
    this.profileForm = new FormGroup(formControls);

    this.profileService.selectedProfile$
      .pipe(filter(p => p != null), takeUntil(this.destroyComponent$()))
      .subscribe(profile => {
        metadata.map(m => m.propertyName)
          .forEach(m => this.profileForm.controls[m].setValue(profile[m] ? profile[m].toString() : null));
      });

  }

  private initFormControls() {
    this.streetsDataSource$ = this.streetsDataService.getEntities<Street>()
      .pipe(
        map(streets =>
            streets.map(s => ({ 'name': s.name, 'id': s.id }))),
        takeUntil(this.destroyComponent$()));
    this.locationsDataSource$ = this.locationsDataService.getEntities<Location>()
      .pipe(
        map(streets =>
          streets.map(s => ({ 'name': s.name, 'id': s.id }))),
        takeUntil(this.destroyComponent$()));
  }
}