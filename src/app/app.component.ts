import { Component } from '@angular/core';
import { AuthService } from './core/auth';
import { APP_PROVIDERS } from './app.providers';

declare var componentHandler: any;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [APP_PROVIDERS]
})
export class AppComponent {
  title: string = 'Service Tracker';

  views: Object[] = [
    {
      name: 'Home',
      description: 'Home page',
      icon: 'home',
      href: ''
    },
    {
      name: 'Vehicles',
      description: 'Vehicles listing',
      icon: 'directions_car',
      href: 'vehicles'
    },
    {
      name: 'Log',
      description: 'Service log',
      icon: 'history',
      href: 'logs'
    },
    {
      name: 'My Account',
      description: 'Edit my account information',
      icon: 'assignment_ind',
      href: '#'
    }
  ];

  constructor(private auth: AuthService) { }

  isAauthenticated(): boolean {
    return this.auth.authenticated;
  }

  userIamge(): string {
    return this.auth.userImage;
  }
  signOut(): void {
    this.auth.signOut();
    window.location.replace('/');
  }
}
