import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { ProfileModel } from "./profile-model";
import { DataService, DataServiceFactory } from "../core";

@Injectable()
export class ProfileService {

  private selectedProfile: BehaviorSubject<ProfileModel> = new BehaviorSubject<ProfileModel>(null);
  private dataService: DataService;

  constructor(private factory: DataServiceFactory) {
    this.dataService = factory.create('Profile');
  }

  selectedProfile$: Observable<ProfileModel> = this.selectedProfile.asObservable();
  selectedProfileName$: Observable<string> = this.selectedProfile.asObservable().pipe(
    map(d => `${d.name} ${d.lastName}`)
  );
  selectedProfileAddress$: Observable<string> = this.selectedProfile.asObservable().pipe(
    map(d => `${d.streetName}`)
  );

  async selectProfile(id: number): Promise<void> {
    const profile = await this.dataService.getEntity<ProfileModel>(id).toPromise();
    this.selectedProfile.next(profile);
  }
}