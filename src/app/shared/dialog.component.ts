import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.component.html'
})
export class ModalDialogComponent {

  @ViewChild('notesDialog') private notesDialog: DialogComponent;

  visible = false;

  show() {
    this.visible = true;
    this.notesDialog.show();
  }
}