import { RouterConfig }       from '@angular/router';
import { LogListComponent }   from './log-list.component';
import { LogDetailComponent }       from './log-detail.component';

export const MileageLogRoutes: RouterConfig = [
  { path: 'mileageLogs', component: LogListComponent },
  { path: 'mileageLog', component: LogDetailComponent }
];