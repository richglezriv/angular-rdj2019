import { Component, OnInit } from '@angular/core';
import { GridComponent, EditSettingsModel, CommandModel } from '@syncfusion/ej2-angular-grids';


@Component({
  selector: 'app-profile-history',
  templateUrl: 'app-profile-history.component.html'
})
export class AppProfileHistoryComponent implements OnInit{

  editSettings: EditSettingsModel;
  paymentDataSource: any[];
  commands: CommandModel[];

ngOnInit(){
  this.editSettings = { allowEditing: true, allowDeleting: true };
  this.paymentDataSource = [{
    paymentType: 'Anualidad',
    amount: 3360.00,
    year: '2018',
    periods: 'ene a dic del 2017'
  }];
  this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.onClick.bind(this) } }];
}
  onClick(){
    console.log('detail');
  }
}