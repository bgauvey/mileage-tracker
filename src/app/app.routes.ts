import { provideRouter, RouterConfig } from '@angular/router';

import { DashboardRoutes } from './dashboard/dashboard.routes';
import { MileageLogRoutes } from './mileageLog/mileageLog.routes';

const appRoutes: RouterConfig = [
  ...DashboardRoutes,
  ...MileageLogRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(appRoutes)
];