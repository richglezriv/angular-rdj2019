import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMovementComponent } from './app-movement.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'movement', component: AppMovementComponent, data: { name: 'movements' } }
    ])
  ],
  exports: [RouterModule]
})
export class AppMovementRoutingModule { }