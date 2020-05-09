import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {TestRoutes} from './routes/test.routes';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forRoot(AppRoutes),
    // RouterModule.forChild(ShowMainRoutes)
    // RouterModule.forChild(<any> TestRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
