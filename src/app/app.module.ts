import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { FormsModule }   from '@angular/forms';

// Material Design
import { MdButtonModule }   from '@angular2-material/button';
import { MdToolbarModule }  from '@angular2-material/toolbar';
import { MdCardModule }     from '@angular2-material/card';
import { MdInputModule }    from '@angular2-material/input';
import { MdCheckboxModule } from '@angular2-material/checkbox';

// app
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard';
import { LogDetailComponent, LogListComponent } from './+logs';
import { SignInComponent } from './shared';
import { VehicleComponent, VehicleListComponent } from './+vehicles';
import { APP_ROUTER_PROVIDERS }   from './app.routes';

// core
import { AUTH_PROVIDERS }         from './core/auth';
import { FIREBASE_APP_PROVIDERS } from './core/firebase';
import { LOG_PROVIDERS }          from './core/logs';
import { VEHICLE_PROVIDERS }      from './core/vehicles';

@NgModule({
    declarations: [AppComponent,
        DashboardComponent,
        LogDetailComponent,
        LogListComponent,
        SignInComponent,
        VehicleComponent,
        VehicleListComponent
    ],
    imports: [BrowserModule,
        APP_ROUTER_PROVIDERS,
        FormsModule,
        HttpModule,
        // Material Design
        MdButtonModule,
        MdToolbarModule,
        MdCardModule,
        MdInputModule,
        MdCheckboxModule
    ],
    bootstrap: [AppComponent],
    providers: [
        AUTH_PROVIDERS,
        FIREBASE_APP_PROVIDERS,
        LOG_PROVIDERS,
        VEHICLE_PROVIDERS
    ]
})
export class AppModule { }
