import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/en';
import {TestComponent} from './test/test.component';
import {RouterModule} from '@angular/router';
// import {LoginComponent} from './login/login.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot([
    //   { path: '', component: LoginComponent },
    //   { path: 'login/:login', component: LoginComponent },
    // ])
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [TestComponent]
})
export class AppModule { }
