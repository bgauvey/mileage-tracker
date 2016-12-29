import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

// Material Design
import { MaterialModule }   from '@angular/material';

// firebase
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

// app
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard';
import { LogDetailComponent, LogListComponent } from './+logs';
import { SignInComponent } from './shared';
import { VehicleComponent, VehicleListComponent } from './+vehicles';
import { routing, appRoutingProviders } from './app.routes';
import { ModalComponent } from './shared/modal/modal.component';
// import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ToastComponent } from './shared/toast/toast.component';
import { FilterTextComponent } from './shared/filter-text/filter-text.component';

// core
import { AUTH_PROVIDERS } from './core/auth';
import { LOG_PROVIDERS } from './core/logs';
import { VEHICLE_PROVIDERS } from './core/vehicles';

// Must export the config
export const firebaseConfig = {
    apiKey: 'AIzaSyBEfCeCg9RJtibHNnQ1ilNWHHSpmQglIaE',
    authDomain: 'mileage-tracker-1aad1.firebaseapp.com',
    databaseURL: 'https://mileage-tracker-1aad1.firebaseio.com',
    storageBucket: 'mileage-tracker-1aad1.appspot.com'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LogDetailComponent,
        LogListComponent,
        SignInComponent,
        VehicleComponent,
        VehicleListComponent,
        ModalComponent,
        // SpinnerComponent,
        ToastComponent,
        FilterTextComponent
    ],
    imports: [
        routing,
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
        MaterialModule.forRoot()
    ],
    bootstrap: [AppComponent],
    providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        LOG_PROVIDERS,
        VEHICLE_PROVIDERS
    ]
})
export class AppModule { }
