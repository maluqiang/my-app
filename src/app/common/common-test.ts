import {Observable, of, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonLogic} from './common-logic';
import {filter, map} from 'rxjs/operators';



// 创建一个可观察者对象-Observable，发射三个数据1、2、3
const myObservable = of(1, 2, 3);

// 创建一个观察者对象-Observer(处理next、error、complete回调)
const myObserver = {
  next: x => console.log('Observer got a next value: ' + x),
  error: err => console.error('Observer got an error: ' + err),
  complete: () => console.log('Observer got a complete notification'),
};



const squareOdd = of(1, 2, 3, 4, 5)
  .pipe(
    // 只需要奇数
    filter(n => n % 2 !== 0),
    // 值平方
    map(n => n * n)
  );

// 订阅
// squareOdd.subscribe(x => console.log(x));

@Injectable({
  providedIn: 'root'
})
export class CommonTest{

  constructor(private commonLogic: CommonLogic, private httpClient: HttpClient){
  }
  test(): void{
    squareOdd.subscribe(x => console.log(x));

    // myObservable.subscribe(myObserver);
  }

}

/**
 * 表头
 */
export interface TableHeads {
  type: string;
  code: string;
  name: string;
}

/**
 * 以省和中医、西医区分鉴定表数量
 */
export interface CategoryAuthData {
  provinceName: string;
  basicName?: string; // 基地名字
  baseId?: number | string;
  reportCount: number; // 上报人数
  validCount: number; // 生成鉴定表人数
  cancelCount: number; // 撤销人数
}
