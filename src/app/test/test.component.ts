import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-test1',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
  testLabel = '说明';
  formGroupTest: FormGroup;
  logo = './assets/images/logo.png';
  alertTest(): void {
    alert(12);
  }
  constructor(private formBuilder: FormBuilder){

  }

  submitForm(): void{

    for (const i in this.formGroupTest.controls) {
      console.log(this.formGroupTest.controls);
      console.log(this.formGroupTest.controls[i]);
      this.formGroupTest.controls[i].markAsDirty();
      this.formGroupTest.controls[i].updateValueAndValidity();
    }

    if (this.formGroupTest.valid) {
      const value = this.formGroupTest.getRawValue();
      const {
        username,
        password
      } = value;

      console.log(value);
      console.log(username);
      console.log(password);
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

