import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppAdminComponent } from "./app-admin.component";
import { AppChartOfAccountComponent } from "./chart-of-account/app-chart-of-account.component";
import { AppAdminUserComponent } from "./user/app-admin-user.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin', component: AppAdminComponent, children: [
          { path: 'user', component: AppAdminUserComponent },
          { path: 'account', component: AppChartOfAccountComponent }
        ]
      },
    ])
  ],
  exports: [RouterModule]
})
export class AppAdminRoutingModule { }