import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-angular-popups';
import { ProfileModel } from "../profile-model";
import { ProfileService } from "../profile.service";

@Component({
  selector: 'app-profile-overview',
  templateUrl: './app-profile-overview.component.html'
})
export class AppProfileOverviewComponent {

  @ViewChild('notesDialog') private notesDialog: DialogComponent;
  constructor(public profileService: ProfileService) {
  }
  
  visible = false;

  deleteNote(noteId: number) {
    console.log(`delete note ${noteId}`);
  }

  viewNotesHistory() {
    this.visible = true;
    if(this.notesDialog){
      this.notesDialog.show();
    }
  }
}