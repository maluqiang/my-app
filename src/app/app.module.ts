import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/en';
import {TestComponent} from './test/test.component';
import {RouterModule} from '@angular/router';
import {NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule, NzTableModule} from 'ng-zorro-antd';
import {TableComponent} from './table/table.component';
import {LoginComponent} from './login/login.component';
import {AppRoutes} from './routes/app.routes';
import {CommonUtil} from './common/common-util';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    RouterModule,
    // RouterModule.forRoot([
    //   { path: '', component: LoginComponent },
    //   { path: 'login/:login', component: LoginComponent },
    // ])
    RouterModule.forRoot(AppRoutes),
    NzTableModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}, CommonUtil],
  bootstrap: [AppComponent]
  // bootstrap: [LoginComponent]
  // bootstrap: [TestComponent]
})
export class AppModule {
}
