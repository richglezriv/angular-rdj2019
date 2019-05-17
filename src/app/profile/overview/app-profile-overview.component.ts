import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ProfileModel } from "../profile-model";
import { ProfileService } from "../profile.service";
import { ModalDialogComponent } from '../../shared/modal-dialog.component';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './app-profile-overview.component.html'
})
export class AppProfileOverviewComponent {

  constructor(public profileService: ProfileService) {
  }
}