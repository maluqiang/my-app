import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class CommonLogic{
  url = 'http://localhost:8091';
  constructor(private httpClient: HttpClient){
  }

  get(path, args): Observable<any> {
    return this.httpClient.get(this.url + path, {args}).pipe(
      map(this.handleLoginResult)
    );
  }
  private handleLoginResult = (modelData) => {
    const {
      serviceResult
    } = modelData;
    if (serviceResult) {
      const {
        flag,
        error,
        data
      } = JSON.parse(serviceResult);
      if (data) {
        const {
          token
        } = data;
        if (token) {
          window.sessionStorage.setItem('token', token);
          this.isLogin = true;
          return true;
        } else {
          this.isLogin = false;
          return false;
        }
      } else {
        this.msg.error(error);
        this.isLogin = false;
        return false;
      }
    } else {
      this.isLogin = false;
      return false;
    }

  }
}

