import { RouterConfig }       from '@angular/router';
import { LogListComponent }   from './log-list.component';
import { LogDetailComponent } from './log-detail.component';
import { AuthGuard }          from '../core/auth';

export const logRoutes: RouterConfig = [
  { path: 'logs', component: LogListComponent, canActivate: [AuthGuard]  },
  { path: 'log', component: LogDetailComponent, canActivate: [AuthGuard]  }
];
