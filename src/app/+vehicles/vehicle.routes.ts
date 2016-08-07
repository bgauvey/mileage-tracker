import { RouterConfig }       from '@angular/router';
import { VehicleListComponent }   from './vehicle-list.component';
import { VehicleComponent }   from './vehicle.component';
import { AuthGuard }          from '../core/auth';

export const vechicleRoutes: RouterConfig = [
  { path: 'vehicles', component: VehicleListComponent, canActivate: [AuthGuard]  },
  { path: 'vehicle', component: VehicleComponent, canActivate: [AuthGuard] }
];
