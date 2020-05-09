import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CommonLogic{
  url = 'http://localhost:8091';
  constructor(private httpClient: HttpClient){
  }
  get(path, params): Observable<any> {
    path = this.url + path;
    console.log(params);
    return this.httpClient.get(path, {params}).pipe(
      map(this.callback)
    );
  }
  private callback = (modelData) => {
    return modelData;
  }
}

