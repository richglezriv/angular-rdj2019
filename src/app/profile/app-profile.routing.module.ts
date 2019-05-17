import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppProfileComponent } from './app-profile.component';
import { AppProfileOverviewComponent } from './overview/app-profile-overview.component';
import { AppProfileDetailComponent } from './detail/app-profile-detail.component';
import { AppProfileHistoryComponent } from './history/app-profile-history.component';
import { GuardRoute } from '../core';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'profile', canActivate: [GuardRoute], component: AppProfileComponent, data: { name: 'profile' }, children: [
          { path: 'overview', component: AppProfileOverviewComponent },
          { path: 'detail', component: AppProfileDetailComponent },
          { path: 'history', component: AppProfileHistoryComponent }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppProfileRoutingModule { }