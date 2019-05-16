import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ProfileModel } from "../profile-model";
import { ProfileService } from "../profile.service";
import {ModalDialogComponent} from '../../shared/modal-dialog.component';

@Component({
  selector: 'app-profile-overview',
  templateUrl: './app-profile-overview.component.html'
})
export class AppProfileOverviewComponent {

  @ViewChild(ModalDialogComponent) private notesDialog: ModalDialogComponent;
  constructor(public profileService: ProfileService) {
  }
  
  deleteNote(noteId: number) {
    console.log(`delete note ${noteId}`);
  }

  viewNotesHistory() {
    this.notesDialog.show();
  }
}