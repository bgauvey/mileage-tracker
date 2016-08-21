import { RouterModule, RouterConfig } from '@angular/router';

import { dashboardRoutes } from './dashboard';
import { logRoutes } from './+logs';
import { vechicleRoutes } from './+vehicles';

const APP_ROUTER_CONFIG: RouterConfig = [
  ...dashboardRoutes,
  ...logRoutes,
  ...vechicleRoutes
];

export const APP_ROUTER_PROVIDERS = RouterModule.forRoot(APP_ROUTER_CONFIG);
