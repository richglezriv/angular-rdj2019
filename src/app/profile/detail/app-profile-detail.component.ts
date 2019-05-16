import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { ProfileService } from "../profile.service";

enum ClientType {
  String = 0,
  Numeric = 1
}

@Component({
  selector: 'app-profile-detail',
  templateUrl: 'app-profile-detail.component.html'
})
export class AppProfileDetailComponent implements OnInit {

  private profile: any;

  constructor(public profileService: ProfileService) {
  }

  profileForm: FormGroup;

  ngOnInit() {

    const metadata = [
      { propertyName: 'name', clientType: ClientType.String },
      { propertyName: 'lastName', clientType: ClientType.String },
      { propertyName: 'phone', clientType: ClientType.String },
      { propertyName: 'mobile', clientType: ClientType.String },
      { propertyName: 'email', clientType: ClientType.String },
    ];
    let formControls: { [key: string]: AbstractControl } = {};
    metadata.map(m => m.propertyName)
      .forEach(m => formControls[m] = new FormControl());
    this.profileForm = new FormGroup(formControls);

    this.profileService.selectedProfile$
      .pipe(filter(p => p != null))
      .subscribe(profile => {
        // this.profile = p;
        metadata.map(m => m.propertyName)
          .forEach(m => this.profileForm.controls[m].setValue(profile[m] ? profile[m].toString() : null));
      });
      
  }
}