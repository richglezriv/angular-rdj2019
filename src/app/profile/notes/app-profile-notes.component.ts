import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalDialogComponent } from '../../shared/modal-dialog.component';

@Component({
  selector: 'app-profile-notes',
  templateUrl: './app-profile-notes.component.html'
})
export class AppProfileNotesComponent {
  
  @ViewChild(ModalDialogComponent) private notesDialog: ModalDialogComponent;
  
  @Input() notes;

  viewNotesHistory() {
    this.notesDialog.show();
  }

  deleteNote(noteId: number) {
    console.log(`delete note ${noteId}`);
  }
}