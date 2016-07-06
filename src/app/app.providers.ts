import { bind, provide } from '@angular/core';
import { HTTP_PROVIDERS, XHRBackend } from '@angular/http';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { MdIconRegistry } from '@angular2-material/icon';

import { Sorter } from './shared/utils/sorter';
import { MileageLogService } from './mileageLog/mileage-log.service';
import { EntityService, ExceptionService, FilterService, ModalService, SpinnerService, ToastService } from './blocks/blocks';

import { InMemoryBackendConfig, InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryService } from '../api/in-memory.service';

import {FIREBASE_PROVIDERS, defaultFirebase, FirebaseAppConfig} from 'angularfire2';

export const APP_PROVIDERS = [
    FORM_PROVIDERS,
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: InMemoryBackendService }),
    provide(SEED_DATA, { useClass: InMemoryService }),
    provide(InMemoryBackendConfig, { useValue: { delay: 600 } }),
    Sorter,
    MileageLogService,
    EntityService,
    ExceptionService,
    FilterService,
    ModalService,
    SpinnerService,
    ToastService,
    MdIconRegistry,
    FIREBASE_PROVIDERS,
    defaultFirebase({
        apiKey: "AIzaSyBEfCeCg9RJtibHNnQ1ilNWHHSpmQglIaE",
        authDomain: "mileage-tracker-1aad1.firebaseapp.com",
        databaseURL: "https://mileage-tracker-1aad1.firebaseio.com",
        storageBucket: "mileage-tracker-1aad1.appspot.com",
    })
];