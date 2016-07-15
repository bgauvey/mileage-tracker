import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent, environment, APP_ROUTER_PROVIDERS} from './app/';

// core
import { AUTH_PROVIDERS } from './app/core/auth';
import { FIREBASE_APP_PROVIDERS } from './app/core/firebase';
import { LOG_PROVIDERS } from './app/core/logs';
import { VEHICLE_PROVIDERS } from './app/core/vehicles'

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  AUTH_PROVIDERS,
  FIREBASE_APP_PROVIDERS,
  LOG_PROVIDERS,
  VEHICLE_PROVIDERS
])
  .then(
  success => console.log('AppComponent bootstrapped!'),
  error => console.log(error)
  );
