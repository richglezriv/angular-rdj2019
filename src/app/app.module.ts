import { NgModule, APP_INITIALIZER } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from "./app.component";
import { AppWelcomeComponent } from "./shell/app-welcome.component";
import { AppLoginComponent } from "./login/app-login.component";
import { AppNavBarComponent } from "./navigation-bar/app-nav-bar.component";
import { PROFILE_COMPONENTS } from "./profile";
import { MOVEMENT_COMPONENTS } from "./movements";
import { ADMIN_COMPONENTS } from "./admin";
import { AppProfileRoutingModule } from "./profile/app-profile.routing.module";
import { AppMovementRoutingModule } from "./movements/app-movement.routing.module";
import { AppAdminRoutingModule } from "./admin/app-admin.routing.module";
import { SHARED_COMPONENTS } from './shared';
import { tokenGetter, DataService, BootstrapperService, AuthenticationService, AuthGuardRoute } from './core';

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
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
        // whitelistedDomains: ['example.com'],
        // blacklistedRoutes: ['example.com/examplebadroute/']
      }
    }),
    ComboBoxModule,
    DialogModule,
    GridModule,
    DatePickerModule,
    RouterModule.forRoot([
      { path: "login", component: AppLoginComponent, data: { name: "login" } },
      { path: "welcome", component: AppWelcomeComponent, data: { name: "welcome" } },
      { path: "**", redirectTo: 'welcome' }
    ]),
    AppProfileRoutingModule,
    AppMovementRoutingModule,
    AppAdminRoutingModule
  ],
  declarations: [
    AppComponent,
    AppWelcomeComponent,
    AppNavBarComponent,
    AppLoginComponent,
    PROFILE_COMPONENTS,
    MOVEMENT_COMPONENTS,
    ADMIN_COMPONENTS,
    SHARED_COMPONENTS
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" },
  BootstrapperService,
  {
    provide: APP_INITIALIZER,
    useFactory: (bootstrapperService: BootstrapperService) => () => bootstrapperService.bootstrap(),
    deps: [BootstrapperService],
    multi: true
  },
    AuthGuardRoute,
    AuthenticationService,
    EditService,
    CommandColumnService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
