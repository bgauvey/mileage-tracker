import { RouterConfig }       from '@angular/router';
import { VehiclesComponent }   from './vehicles.component';
import { AuthGuard }          from '../core/auth';

export const VechicleRoutes: RouterConfig = [
  { path: 'vehicles', component: VehiclesComponent, canActivate: [AuthGuard]  },
];
