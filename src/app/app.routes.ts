import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardRoutes } from './dashboard';
import { LogRoutes } from './+logs';
import { VechicleRoutes } from './+vehicles';

const appRoutes: RouterConfig = [
  ...DashboardRoutes,
  ...LogRoutes,
  ...VechicleRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];
