import {LoginComponent} from '../login/login.component';
import {TableComponent} from '../table/table.component';
import {TestComponent} from '../test/test.component';

export const AppRoutes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
  {
    path: 'test',
    // loadChildren: '../test/test.component#TestModule'
    component: TestComponent
  },
  {
    path: 'login',
    // loadChildren: '../login/login.component#LoginComponent'
    component: LoginComponent
  },
  {
    path: 'table',
    // loadChildren: '../login/login.component#LoginComponent'
    component: TableComponent
  }
];
