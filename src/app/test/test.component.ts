import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonLogic} from '../common/common-logic';
import {Subject} from 'rxjs';
import {CommonUtil} from '../common/common-util';
import {Router} from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  private API_SELECT_DICTIONARY = '/dictionary/select';
  testLabel = '说明';
  formGroupTest: FormGroup;
  logo = './assets/images/logo.`png';
  alertTest(): void {
    alert(12);
  }
  constructor(private formBuilder: FormBuilder, private commonLogic: CommonLogic, private commonUtil: CommonUtil, private router: Router){
  }

  submitForm(): void{

    for (const i in this.formGroupTest.controls) {
      // console.log(i);
      this.formGroupTest.controls[i].markAsDirty();
      this.formGroupTest.controls[i].updateValueAndValidity();
    }

    if (this.formGroupTest.valid) {
      const value = this.formGroupTest.getRawValue();
      const {
        username,
        password
      } = value;

      this.commonLogic.get(this.API_SELECT_DICTIONARY, value).subscribe((res) => {
        console.log(res);
        this.commonUtil.sender.next();
        this.router.navigateByUrl('table');
      });
      // this.overviewService.loginByusername({loginCode: username}).subscribe((res) => {
      //   if (this.overviewService.isLogin) {
      //     this.pubFnService.updateAction$.next();
      //   }
      // });
    }
  }
  ngOnInit(): void {
    this.formGroupTest = this.formBuilder.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
}

