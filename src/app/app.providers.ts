import { FORM_PROVIDERS } from '@angular/common';
import { MdIconRegistry } from '@angular2-material/icon';
import { MdUniqueSelectionDispatcher } from '@angular2-material/radio';

import { EntityService, ExceptionService, FilterService, ModalService, SpinnerService, ToastService } from './shared';

export const APP_PROVIDERS = [
    FORM_PROVIDERS,
    EntityService,
    ExceptionService,
    FilterService,
    ModalService,
    SpinnerService,
    ToastService,
    MdIconRegistry,
    MdUniqueSelectionDispatcher
];
