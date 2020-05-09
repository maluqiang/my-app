import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CommonLogic} from '../common/common-logic';
import {Observable, of, Subject} from 'rxjs';
import {CategoryAuthData, CommonUtil, TableHeads} from '../common/common-util';
import {map, merge} from 'rxjs/operators';
import {CommonTest} from '../common/common-test';

@Component({
  selector: 'app-tb',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, OnChanges {

  @Input() tableHeads: TableHeads[];
  @Input() scrollConfig: any;
  @Input() loadingDelay: number;
  @Input() bordered: boolean;
  @Input() frontPagination: boolean;
  modelData;
  tes: string;

  private API_SELECT_DICTIONARY = '/dictionary/select';
  formGroupTest1: FormGroup;
  logo = './assets/images/logo.png';
  updateAction$ = new Subject();
  resultData: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private commonLogic: CommonLogic,
    private commonUtil: CommonUtil,
    private commonTest: CommonTest
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    this.formGroupTest1 = this.formBuilder.group({
      username: [null, [Validators.required]],
      idCard: [null, [Validators.required]],
    });
    const par = {
      username: '123',
      idCard: '333'
    };
    this.formGroupTest1.patchValue(par);
    const sd = this.commonUtil.getAll(par);
    this.commonUtil.resultData = sd;
    this.modelData = sd;
  }
  myClick(): void{
    const a = this.test;
    console.log(map(this.test));
    this.tes = a.call('1222');
    console.log(this.tes);
    console.log(this.resultData);


    this.commonTest.test();
    // myObserver.next('1');

    // myObserver.error('1');
    this.ngOnInit();
  }

  private test = (resultData) => {
    alert(resultData);
    resultData = 'da';
    return '12';
  }

  /**
   * 查看
   */
  lookInfo(item: TableHeads): void {
    console.log(item);
  }
}

