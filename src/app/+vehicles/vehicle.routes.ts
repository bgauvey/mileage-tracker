import { RouterConfig }       from '@angular/router';
import { VehicleListComponent }   from './vehicle-list.component';
import { AuthGuard }          from '../core/auth';

export const VechicleRoutes: RouterConfig = [
  { path: 'vehicles', component: VehicleListComponent, canActivate: [AuthGuard]  }
];
