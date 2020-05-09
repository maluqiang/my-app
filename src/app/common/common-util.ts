import {Observable, Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonLogic} from './common-logic';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonUtil{
  url = 'http://localhost:8091';
  private API_SELECT_DICTIONARY = '/dictionary/select';

  resultData: Observable<TableHeads[] | CategoryAuthData[] | any>;
  sender = new Subject();

  constructor(private commonLogic: CommonLogic, private httpClient: HttpClient){
  }
  /*
  * 获取所有中医、西医、专科统计数据
  * */
  getAll(params?: any): Observable<TableHeads[]> {
    return this.httpClient.get(this.url + this.API_SELECT_DICTIONARY, {params}).pipe(
      map(this.callback)
    );
  }
  callback = (modelData) => {
    const {
      serviceResult
    } = modelData;
    if (serviceResult) {
      const {
        flag,
        data
      } = JSON.parse(serviceResult);
      if (flag === 'true' && data) {
        return data.data;
      }
      return null;
    }
    return null;
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
