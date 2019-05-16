import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html'
})
export class ModalDialogComponent {

  @ViewChild(DialogComponent) private notesDialog: DialogComponent;

  visible = false;

  show() {
    this.visible = true;
    this.notesDialog.show();
  }
}