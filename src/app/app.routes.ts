import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { dashboardRoutes, dashboardProviders } from './dashboard';
import { logRoutes } from './+logs';
import { vechicleRoutes } from './+vehicles';

const appRoutes: Routes = [
  ...dashboardRoutes,
  ...logRoutes,
  ...vechicleRoutes
];

export const appRoutingProviders: any[] = [
  dashboardProviders
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
