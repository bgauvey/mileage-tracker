import { provideRouter, RouterConfig } from '@angular/router';

import { dashboardRoutes } from './dashboard';
import { logRoutes } from './+logs';
import { vechicleRoutes } from './+vehicles';

const appRoutes: RouterConfig = [
  ...dashboardRoutes,
  ...logRoutes,
  ...vechicleRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];
