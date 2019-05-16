import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppLoginComponent } from "./login/app-login.component";
import { AppNavBarComponent } from "./navigation-bar/app-nav-bar.component";
import { PROFILE_COMPONENTS } from "./profile";
import { MOVEMENT_COMPONENTS } from "./movements";
import { ADMIN_COMPONENTS } from "./admin";
import { AppProfileRoutingModule } from "./profile/app-profile.routing.module";
import { AppMovementRoutingModule } from "./movements/app-movement.routing.module";
import { AppAdminRoutingModule } from "./admin/app-admin.routing.module";
import {SHARED_COMPONENTS} from './shared';

import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { GridModule, EditService, CommandColumnService } from '@syncfusion/ej2-angular-grids';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "login", component: AppLoginComponent, data: { name: "login" } },
    ]),
    AppProfileRoutingModule,
    AppMovementRoutingModule,
    AppAdminRoutingModule,
    ComboBoxModule,
    DialogModule,
    GridModule,
    DatePickerModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AppNavBarComponent,
    AppLoginComponent,
    PROFILE_COMPONENTS,
    MOVEMENT_COMPONENTS,
    ADMIN_COMPONENTS,
    SHARED_COMPONENTS
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }, EditService, CommandColumnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
