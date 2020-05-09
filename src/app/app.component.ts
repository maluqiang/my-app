import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CommonUtil} from './common/common-util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(public commonUtil: CommonUtil, private  router: Router) {
    const update$ = this.commonUtil.sender.asObservable();
    console.log(update$);
    update$.pipe(
      // take(1),
    ).subscribe((res) => {
      // tableComponent.ngOnInit();
      console.log(res);
    });
  }
}
