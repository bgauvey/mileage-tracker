import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

import { AuthGuard } from '../core/auth/auth.guard';
import { UnauthGuard } from '../core/auth/unauth.guard';

import { SignInComponent } from '../shared/sign-in/sign-in.component';

export const dashboardRoutes: Routes = [
    { path: '', component: SignInComponent, canActivate: [UnauthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];


export const dashboardProviders: any[] = [
    AuthGuard,
    UnauthGuard
];

export const dashboardRouting = RouterModule.forChild(dashboardRoutes);
