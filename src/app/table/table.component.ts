import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonLogic} from '../common/common-logic';
import {Subject} from 'rxjs';
import {CommonUtil, TableHeads} from '../common/common-util';
import {CommonTest} from '../common/common-test';

@Component({
  selector: 'app-tb',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnChanges {

  // @Input() modelData: TableHeads[];
  @Input() scrollConfig: any;
  @Input() loadingDelay: number;
  @Input() bordered: boolean;
  @Input() frontPagination: boolean;
  tes: string;

  private API_SELECT_DICTIONARY = '/dictionary/select';
  formGroupTest: FormGroup;
  logo = './assets/images/logo.png';
  updateAction$ = new Subject();
  // resultData: Observable<any>;
  // resultData: TableHeads[];
  constructor(
    private formBuilder: FormBuilder,
    private commonLogic: CommonLogic,
    public commonUtil: CommonUtil,
    private commonTest: CommonTest
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.formGroupTest = this.formBuilder.group({
      type: [null, [Validators.required]],
      code: [null],
      name: null,
    });
    const par = {
      type: 0,
      code: '',
      name: '',
    };
    this.formGroupTest.patchValue(par);
    this.commonUtil.resultData = this.commonUtil.getAll(par);
    // this.table.;

    // this.resultData = sd.subscribe();
    // this.modelData = sd;
  }
  myClick(): void{
    for (const i in this.formGroupTest.controls) {
      if (i === undefined) {
        continue;
      }
      this.formGroupTest.controls[i].markAsDirty();
      this.formGroupTest.controls[i].updateValueAndValidity();
    }
    const par = this.formGroupTest.getRawValue();
    const args = {};

    for (const [key, value] of Object.entries(par)) {
      if (value != null && value !== '') {
        args[key] = value;
      }
    }
    debugger;
    this.commonUtil.resultData = this.commonUtil.getAll(args);
    // const server = {
    //   next(x) { console.log(x); },
    //   error() { console.log(12); },
    // };
    // sd.pipe(this.test).subscribe(server);
  }

  private test = resultData => {
    // alert(resultData);
    // resultData = 'da';
    // this.modelData = resultData;
    return resultData;
  }

  /**
   * 查看
   */
  lookInfo(item: TableHeads): void {
    console.log(item);
  }
}

