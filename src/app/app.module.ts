import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

// Material Design
import { MaterialModule }   from '@angular/material';

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
import { FIREBASE_APP_PROVIDERS } from './core/firebase';
import { LOG_PROVIDERS } from './core/logs';
import { VEHICLE_PROVIDERS } from './core/vehicles';

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
        // Material Design
        MaterialModule.forRoot()
    ],
    bootstrap: [AppComponent],
    providers: [
        appRoutingProviders,
        AUTH_PROVIDERS,
        FIREBASE_APP_PROVIDERS,
        LOG_PROVIDERS,
        VEHICLE_PROVIDERS
    ]
})
export class AppModule { }
