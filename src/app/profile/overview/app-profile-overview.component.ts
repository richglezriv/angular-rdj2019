import { Component, OnInit } from '@angular/core';

import { ProfileModel } from "../profile-model";
import { ProfileService } from "../profile.service";

@Component({
  selector: 'app-profile-overview',
  templateUrl: './app-profile-overview.component.html'
})
export class AppProfileOverviewComponent {
  constructor(public profileService: ProfileService) {
  }

  deleteNote(noteId:number){
    console.log(`delete note ${noteId}`);
  }
}