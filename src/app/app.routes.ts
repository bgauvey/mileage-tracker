import { RouterModule, RouterConfig } from '@angular/router';

import { DashboardRoutes } from './dashboard';
import { LogRoutes } from './+logs';
import { VechicleRoutes } from './+vehicles';

const APP_ROUTER_CONFIG: RouterConfig = [
  ...DashboardRoutes,
  ...LogRoutes,
  ...VechicleRoutes
];

export var routes = RouterModule.forRoot(APP_ROUTER_CONFIG);
