import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { GridComponent, EditSettingsModel, CommandModel } from '@syncfusion/ej2-angular-grids';
import { ProfileService } from "../profile.service";
import { TakeUntilDestroy } from '../../core';

@Component({
  selector: 'app-profile-history',
  templateUrl: 'app-profile-history.component.html'
})
@TakeUntilDestroy()
export class AppProfileHistoryComponent implements OnInit {

  private destroyComponent$;

  constructor(public profileService: ProfileService) { }
  editSettings: EditSettingsModel;
  paymentDataSource: any[];
  commands: CommandModel[];

  ngOnInit() {
    this.profileService.selectedProfile$
      .pipe(takeUntil(this.destroyComponent$()))
      .subscribe(profile => this.paymentDataSource = profile['payments']);
    this.editSettings = { allowEditing: true, allowDeleting: true };
    this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.onClick.bind(this) } }];
  }
  onClick() {
    console.log('detail');
  }
}