import { RouterConfig }           from '@angular/router';
import { DashboardComponent }     from './dashboard.component';
import { AuthGuard, UnauthGuard } from '../core/auth';
import { SignInComponent }        from '../shared';

export const dashboardRoutes: RouterConfig = [
    { path: '', component: SignInComponent, canActivate: [UnauthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];
